'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  label: string;
};

const NavLink: React.FC<Props> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block px-4 py-2 rounded-md transition-colors duration-300 ${
        isActive
          ? 'bg-primary text-white'
          : 'text-gray-700 hover:bg-gray-200 hover:text-primary'
      }`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
