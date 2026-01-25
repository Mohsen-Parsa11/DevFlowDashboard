"use client";
import { NavLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetClose, SheetFooter } from "../ui/sheet";
import { Button } from "../ui/button";
import ROUTES from "@/constants/route";

export default function LeftSidebar() {
  const pathName = usePathname();

  return (
    <Sheet>
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
        <div>
          <SheetFooter>
            <SheetClose asChild>
              <Button className="w-full bg-slate-800 hover:bg-slate-800/80 cursor-pointer border border-gray-700 text-primary-400 ">
                <Link href={ROUTES.SIGN_IN}>log in</Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button variant="outline" className="cursor-pointer w-full">
                <Link href={ROUTES.SIGN_UP}>sign up</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </ul>
    </Sheet>
  );
}
