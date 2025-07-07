import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-orange-900/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.amber.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Join Us in Revolutionizing DeFi
            </h2>
            <div className="pb-4">
              Be part of the next wave of DeFi. Secure your position with Sprinx.
            </div>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">

              <Link
                href="https://docs.sprinx.xyz/"
                target="_blank"
                className="mt-4 rounded-full py-3 px-8 text-lg btn-sm bg-gradient-to-t from-orange-600 to-orange-500 text-white"
              >
                Learn more<span className="ml-2">→</span>
              </Link>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
