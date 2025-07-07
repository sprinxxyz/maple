export const metadata = {
  title: "Sprinx",
  description: "The next-level central trading and liquidity hub on Somnia, Powered by Ve33.",
  applicationName: "Sprinx",
  keywords: ["DeFi", "DEX", "AMM", "Somnia", "Shannon", "Ve33", "Exchange"],
  openGraph: {
    title: 'Sprinx',
    description: 'The next-level central trading and liquidity hub on Somnia, Powered by Ve33.',
    url: 'https://sprinx.xyz',
    siteName: 'Sprinx',
    images: [
      {
        url: 'https://sprinx.xyz/images/original.png', // Must be an absolute URL
        width: 1025,
        height: 1025,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/images/original.png',
    shortcut: '/images/original.png',
    apple: '/image/apple-touch-icon.png',
    other: {
      url: '/images/original.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprinx',
    description: 'The Heartbeat of Somnia Liquidity.',
    creator: '@sprinx_xyz',
    images: ['https://nextjs.org/images/original.png'], // Must be an absolute URL
  },
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Metrics from "@/components/metrics";
import Incentive from "@/components/incentive";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Metrics />
      <Incentive />
      <Workflows />
      <Testimonials />
      <Cta />
    </>
  );
}
