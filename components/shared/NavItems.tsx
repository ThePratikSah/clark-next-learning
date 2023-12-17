"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const path = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = path === link.route;
        return (
          <li
            className={`${
              isActive && "text-sky-700"
            } flex-center p-medium-16 whitespace-nowrap`}
            key={link.label}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
