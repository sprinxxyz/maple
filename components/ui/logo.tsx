import Link from "next/link";
import Image from "next/image";
import wordmark from "@/public/images/wordmark.svg";
import logoMobile from "@/public/images/logoMobile.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0">
      <Image src={wordmark} alt="Sprinx Logo" width={180} height={64} className="sm:block hidden" />
      <Image src={logoMobile} alt="Sprinx Logo" width={60} height={40} className="block sm:hidden" />
    </Link>
  );
}
