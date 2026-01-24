"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";
import ROUTES from "@/constants/route";
import SidebarNavLinks from "../SidebarNavLinks";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="size-9 rounded-md cursor-pointer md:hidden"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className=" overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
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
          </SheetTitle>
        </SheetHeader>

        <SidebarNavLinks />

        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-slate-800 hover:bg-slate-800/80 cursor-pointer border border-gray-700 text-primary-400 ">
              <Link href={ROUTES.SIGN_IN}>log in</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline" className="cursor-pointer">
              <Link href={ROUTES.SIGN_UP}>sign up</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
