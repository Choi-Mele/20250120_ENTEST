"use client"

import joinClassName from "@/app/utils/utils";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from "react";

interface NavItemProps {
  href: string;
  label: string;
  className?: string;
  isActive?: boolean;
}

const NavItem = ({ href, label, className = "" }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = href === '/' ? pathname === '/' : pathname.includes(href);  // 홈('/')인 경우는 정확히 일치할 때만 active, 나머지는 includes
  
  return (
    <li className={joinClassName("c_nav_item", isActive ? "active" : "", className)}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default NavItem;
