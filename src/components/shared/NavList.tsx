"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavList = ({
  startIndex = 0,
  endIndex = navLinks.length,
  children,
  classNames = "",
}: {
  startIndex?: number;
  endIndex?: number;
  children?: React.ReactNode;
  classNames?: string;
}) => {
  const pathname = usePathname();

  return (
    <ul className={classNames}>
      {navLinks.slice(startIndex, endIndex).map((link) => {
        const isActive = link.route === pathname;
        return (
          <li
            key={link.route}
            className={`sidebar-nav_element  ${
              isActive ? "bg-purple-gradient text-white" : "text-gray-700"
            }`}
          >
            <Link href={link.route} className="sidebar-link">
              <Image
                src={link.icon}
                alt="logo"
                width={24}
                height={24}
                className={`${isActive && "brightness-200"}`}
              />
              {link.label}
            </Link>
          </li>
        );
      })}
      {children}
    </ul>
  );
};

export default NavList;
