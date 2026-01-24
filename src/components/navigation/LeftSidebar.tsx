"use client";
import { NavLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftSidebar() {
  const pathName = usePathname();

  return (
    <ul className="px-4 flex-col space-y-4 bg-slate-900 min-h-screen hidden md:flex">
      {NavLinks.map((nav) => {
        const isActive = nav.href == pathName;

        return (
          <Link href={nav.href} key={nav.id}>
            <li
              className={cn(
                "p-3 rounded-lg flex gap-4 text-white items-center",
                isActive && "primary_gradient",
              )}
            >
              <nav.icon className="size-5" />
              <span className="hidden lg:block">{nav.label}</span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
