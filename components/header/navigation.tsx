'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NavLink from './nav-link';

const Navigation: React.FC = () => {
  const pathname = usePathname();

  // Extract the base path (e.g., "/thejayadad@gmail.com")
  const basePath = `/${pathname.split('/')[1]}`;

  // Dynamically generate routes based on the base path
  const routes = [
    {
      href: `${basePath}`, // Dynamic home route
      label: 'Overview',
    },
    {
      href: `${basePath}/food`, // Dynamic categories route
      label: 'Food',
    },
    {
      href: `${basePath}/settings`, // Dynamic categories route
      label: 'Settings',
    },
  ];

  return (
    <div className="hidden md:flex md:ml-2 items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => {
        const isActive = pathname === route.href;

        return (
          <NavLink
            key={route.href}
            href={route.href}
            label={route.label}
          />
        );
      })}
    </div>
  );
};

export default Navigation;
