"use client";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { cn } from "@/lib/utils";
import { NavLinks } from "@/constants";
import { usePathname } from "next/navigation";

export default function SidebarNavLinks() {
  const pathName = usePathname();

  return (
    <ul className="px-4 flex flex-col space-y-4">
      {NavLinks.map((nav) => {
        const isActive = nav.href == pathName;

        return (
          <SheetClose asChild key={nav.id}>
            <Link href={nav.href}>
              <li
                className={cn(
                  "p-3 rounded-lg flex gap-4 text-white items-center",
                  isActive && "primary_gradient",
                )}
              >
                <nav.icon className="size-5" />
                <span>{nav.label}</span>
              </li>
            </Link>
          </SheetClose>
        );
      })}
    </ul>
  );
}
