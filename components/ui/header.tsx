"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5 fixed md:top-5 top-2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex sm:h-20 py-4 sm:py-0 items-center backdrop-blur-xl justify-between gap-3 rounded-full  px-6 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.orange.800),theme(colors.orange.700),theme(colors.orange.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <ul className="flex sm:flex-1 items-center justify-end gap-4">
            <li className="relative">
              {/* Badge "Coming Soon" */}
              <span className="absolute -top-2 -right-2 z-10 text-[10px] px-2 py-[2px] bg-white text-gray-800 rounded-full shadow-md">
                wen..🤔?
              </span>

              {/* Tombol Launch App */}
              <Link
                href="#"
                target="_blank"
                className="relative z-0 rounded-full py-2 px-3 text-sm sm:text-lg sm:py-2 sm:px-4 text-lg btn-sm bg-gradient-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                Launch App
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
