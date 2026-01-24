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
          <SheetClose key={nav.id}>
            <li
              className={cn("p-3 rounded-lg", isActive && "primary_gradient")}
            >
              <Link
                href={nav.href}
                className="
                      flex gap-4 text-white items-center"
              >
                <nav.icon className="size-7" />
                <span>{nav.label}</span>
              </Link>
            </li>
          </SheetClose>
        );
      })}
    </ul>
  );
}
