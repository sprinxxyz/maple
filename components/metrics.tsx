import Image from "next/image";
import Spotlight from "@/components/spotlight";

export default function Metrics() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-24 md:pb-52">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-orange-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-orange-200/50">
              <span className="inline-flex bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                Highlights
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] m-auto bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.amber.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Core Metrics of Sprinx Protocol
            </h2>
            <p className="text-lg text-gray-200/65 max-w-lg m-auto">
              With Sprinx, you have easy access to a new array of assets.
            </p>
          </div>

          <div className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            <div className="p-4 px-10 flex-1 relative flex flex-col items-center rounded-full before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.orange.900),theme(colors.orange.400),theme(colors.orange.900))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <h2 className="mx-auto animate-[gradient_6s_linear_infinite] bg-[#FCEF91] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                0%
              </h2>
              <p className="text-sm text-gray-200/65 max-w-lg">
                SPX Locked
              </p>
            </div>
            <div className="p-4 px-10 flex-1 relative flex flex-col items-center rounded-full before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.orange.900),theme(colors.orange.400),theme(colors.orange.900))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <h2 className="animate-[gradient_6s_linear_infinite] mx-auto bg-[#FCEF91] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                $0
              </h2>
              <p className="text-sm text-gray-200/65 max-w-lg">
                Market Cap
              </p>
            </div>
            <div className="p-4 px-10 flex-1 relative flex flex-col items-center rounded-full before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.orange.900),theme(colors.orange.400),theme(colors.orange.900))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <h2 className="animate-[gradient_6s_linear_infinite] mx-auto bg-[#FCEF91] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                0%
              </h2>
              <p className="text-sm text-gray-200/65 max-w-lg">
                veSPX APR
              </p>
            </div>
          </div>

          {/* <div className="mt-8 p-4 px-10 flex-1 relative flex flex-col items-center rounded-full before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
            <h2 className="animate-[gradient_6s_linear_infinite] mx-auto bg-purple-400 bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              0
            </h2>
            <p className="text-sm text-indigo-200/65 max-w-lg">
              
            </p>
          </div> */}

          <div className="mt-8 group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            <div className="p-4 px-10 flex-1 relative flex flex-col items-center rounded-full before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.orange.900),theme(colors.orange.400),theme(colors.orange.900))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <h2 className="mx-auto animate-[gradient_6s_linear_infinite] bg-orange-500 bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                $0
              </h2>
              <p className="text-sm text-gray-200/65 max-w-lg">
                Protocol TVL
              </p>
            </div>
            <div className="p-4 px-10 flex-1 relative flex flex-col items-center rounded-full before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.orange.900),theme(colors.orange.400),theme(colors.orange.900))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <h2 className="animate-[gradient_6s_linear_infinite] mx-auto bg-orange-500 bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                $0
              </h2>
              <p className="text-sm text-gray-200/65 max-w-lg">
                Epoch Incentives
              </p>
            </div>
            <div className="p-4 px-10 flex-1 relative flex flex-col items-center rounded-full before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.orange.900),theme(colors.orange.400),theme(colors.orange.900))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <h2 className="animate-[gradient_6s_linear_infinite] mx-auto bg-orange-500 bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                $0.001
              </h2>
              <p className="text-sm text-gray-200/65 max-w-lg">
                Incentives per 1000 Votes (Avg)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
