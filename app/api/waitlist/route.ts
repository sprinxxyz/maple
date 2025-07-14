import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import mongoose from 'mongoose';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import * as yup from 'yup';
import { render } from '@react-email/render';
import EmailLetter from '@/utils/useEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const MONGO_URI = process.env.MONGO_URI as string;
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY as string;

// Connect to MongoDB
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGO_URI, { dbName: 'waitlist' });
}

// Define schema
const WaitlistEntrySchema = new mongoose.Schema({
  name: String,
  email: String,
  wallet: String,
  ip: String,
  createdAt: { type: Date, default: Date.now },
});

const WaitlistEntry = mongoose.models.WaitlistEntry || mongoose.model('WaitlistEntry', WaitlistEntrySchema);

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  wallet: yup.string().required(),
  captcha: yup.string().required(),
});

// Rate Limiter (2 per IP)
const limiter = new RateLimiterMemory({ points: 2, duration: 86400 });

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
  try {
    const body = await req.json();
    await schema.validate(body);

    // Rate limit check
    await limiter.consume(ip);

    // Verify reCAPTCHA
    const captchaVerify = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${body.captcha}`,
      { method: 'POST' }
    );
    const captchaResult = await captchaVerify.json();
    if (!captchaResult.success) throw new Error('Captcha verification failed');

    // Save to DB
    const entry = new WaitlistEntry({ ...body, ip });
    await entry.save();

    // Send email
    await resend.emails.send({
      from: 'Sprinx <noreply@sprinx.xyz>',
      to: body.email,
      subject: 'Congratulations, you’re on the list!',
      html: await render(EmailLetter({ userName: body.name })),
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ message: err.message || 'Internal error' }, { status: 400 });
  }
}