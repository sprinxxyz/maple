import ModalVideo from "@/components/modal-video";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-40">
        
        <div className="py-12 md:py-20">
        
          <div className="pb-12 text-center md:pb-20">
            <h1
              className=" mb-4 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.amber.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-6xl"
              data-aos="fade-up"
            >
              <p className="text-purple-400 mb-3 text-5xl md:text-7xl"></p>
              The <span className="text-orange-500">Heartbeat</span> of Somnia's Liquidity
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="text-xl text-orange-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
               Sprinx is the central trading and liquidity hub on Somnia, Powered by Ve(3,3).
              </p>
              <p
                className="mb-8 text-xl text-orange-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                
              </p>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center mt-20">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <Link
                    href="https://docs.sprinx.xyz"
                    target="_blank"
                    className="rounded-full py-3 px-8 text-lg btn-sm bg-gradient-to-t bg-white bg-[length:100%_100%] bg-[bottom] text-gray-800 shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                  >
                    Docs <span className="ml-2">→</span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
