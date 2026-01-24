import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav/MobileNav";
import { Theme } from "../Theme";

export default function Navbar() {
  return (
    <nav className="wrapper py-4 flex items-center justify-between">
      <Link href="/" className="flex gap-1 items-center">
        <Image
          src="/images/site-logo.svg"
          alt="DevFlow Logo"
          width={24}
          height={24}
        />
        <h3 className="text-lg font-semibold">
          Dev
          <span className="text-primary-400">Flow</span>
        </h3>
      </Link>
      <div className="">global search</div>
      <span>
        <Theme />
      </span>
      <MobileNav />
    </nav>
  );
}
