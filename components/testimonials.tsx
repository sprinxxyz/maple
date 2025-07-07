"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import somnia from "@/public/images/somnia.svg";
import velodrome from "@/public/images/velodrome.png";
import ankr from "@/public/images/ankr.svg";

const testimonials: { clientImg: StaticImageData; company: string; categories: number[]; href: string; content?: string }[] = [
  {
    clientImg: somnia,
    company: "Somnia",
    categories: [1],
    href: "https://somnia.network/"
  },
  {
    clientImg: velodrome,
    company: "Velodrome",
    categories: [1],
    href: "https://velodrome.finance/"
  },
  {
    clientImg: ankr,
    company: "Ankr",
    categories: [1],
    href: "https://ankr.com/"
  }
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.amber.200),theme(colors.orange.200),theme(colors.orange.50),theme(colors.orange.300),theme(colors.amber.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Built with the best
          </h2>
        </div>

        <div>
          {/* Buttons */}
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
              {/* Button #1 */}
              
              {/* Button #5 */}
              {/* <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${category === 5 ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 5}
                onClick={() => setCategory(5)}
              >
                <svg
                  className={`fill-current ${category === 5 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M13.95.879a3 3 0 0 0-4.243 0L1.293 9.293a1 1 0 0 0-.274.51l-1 5a1 1 0 0 0 1.177 1.177l5-1a1 1 0 0 0 .511-.273l1.16-1.16a1 1 0 0 0-1.414-1.414l-.946.946-3.232.646.646-3.232 8.2-8.2a1 1 0 0 1 1.414 0l1.172 1.172a1 1 0 0 1 0 1.414l-.55.549a1 1 0 0 0 1.415 1.414l.55-.55a3 3 0 0 0 0-4.241L13.948.879ZM3.25 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm11.474 6.029-1.521-.752-.752-1.521c-.168-.341-.73-.341-.896 0l-.752 1.52-1.521.753a.498.498 0 0 0 0 .896l1.52.752.753 1.52a.5.5 0 0 0 .896 0l.752-1.52 1.52-.752a.498.498 0 0 0 0-.896Z" />
                </svg>
                <span>Enteprise</span>
              </button> */}
            </div>
          </div>

          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial} category={category}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img?: StaticImageData;
    clientImg?: StaticImageData;
    name?: string;
    company?: string;
    content?: string;
    categories: number[];
    href: string;
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-gradient-to-br from-orange-800/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}
    >
        <div className="flex flex-col gap-4">
          {testimonial.clientImg && (
            <div>
              <Image src={testimonial.clientImg} height={36} alt="Client logo" />
            </div>
          )}
          {children && (
            <p className="text-gray-200/65 before:content-['“'] after:content-['”']">
              {children}
            </p>
          )}

          <div className="flex items-center gap-3">
            {testimonial.img && (
              <Image
                className="inline-flex shrink-0 rounded-full"
                src={testimonial.img}
                width={36}
                height={36}
                alt={testimonial.name || ""}
              />
            )}
            <div className="text-sm font-medium text-amber-200">
              <span>{testimonial.name}</span>
              <a
                className="text-orange-200/65 transition-colors hover:text-orange-500"
                href={testimonial.href}
              >
                {testimonial.company}
              </a>
            </div>
          </div>
        </div>
    </article>
  );
}
