'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import ReCAPTCHA from 'react-google-recaptcha';

export default function WaitlistModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const cancelButtonRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsOpen]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidAddress = (wallet: string) => {
    const addressRegex = /^0x[a-fA-F0-9]{40}$/g;
    return addressRegex.test(wallet);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      toast.error('Please complete the CAPTCHA');
      return;
    }

  if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
  }

  if (!isValidAddress(wallet)) {
        toast.error("Please enter a valid Wallet address");
        return;
    } 
    
    setLoading(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, wallet, captcha: captchaToken }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');

      toast.success('Success! Please check your email.');
      setIsOpen(false);
      setName('');
      setEmail('');
      setWallet('');
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 font-nacelle text-gray-900"
                  >
                    🔆 Join the Waitlist
                  </Dialog.Title>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-orange-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name or Pseudonym"
                    className="w-full rounded-xl border-2 font-nacelle border-gray-500 focus:border-orange-400 p-2 text-gray-700 focus:outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border-2 font-nacelle border-gray-500 focus:border-orange-400 p-2 text-gray-700 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Wallet Address"
                    className="w-full rounded-xl border-2 font-nacelle border-gray-500 focus:border-orange-400 p-2 text-gray-700 focus:outline-none"
                    value={wallet}
                    onChange={(e) => setWallet(e.target.value)}
                    required
                  />
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(token) => setCaptchaToken(token)}
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-t from-orange-600 to-orange-400 hover:bg-orange-900 text-white py-2 rounded-full transition duration-150 font-nacelle text-lg"
                    disabled={loading}
                  >
                    {loading ? 'Submitting…' : 'Submit →'}
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}