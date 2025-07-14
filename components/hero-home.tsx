'use client';

import ModalVideo from "@/components/modal-video";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

const WaitlistModal = dynamic(() => import("@/components/ui/waitlistModal"), { ssr: false });

export default function HeroHome() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-40">

        <div className="py-12 md:py-20">

          <div className="pb-12 text-center md:pb-20">
            <h1
              className=" mb-4 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.amber.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-6xl"
              data-aos="fade-up"
            >
              <p className="text-orange-400 mb-3 text-5xl md:text-7xl"></p>
              The <span className="text-orange-500">Heartbeat</span> of Somnia's Liquidity
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="100">
                Join our mission to redefine DeFi and earn early access rewards.
              </p>
              <div className="mt-8 flex justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                <button
                  onClick={() => setIsWaitlistOpen(true)}
                  className="bg-gradient-to-t from-orange-700 to-orange-400 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg transition-all"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <WaitlistModal isOpen={isWaitlistOpen} setIsOpen={setIsWaitlistOpen} />
    </section>
  );
}
