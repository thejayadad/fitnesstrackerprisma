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
      href: `${basePath}/categories`, // Dynamic categories route
      label: 'Categories',
    },
  ];

  return (
    <div className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => {
        const isActive = pathname === route.href;

        return (
          <NavLink
            key={route.href}
            href={route.href}
            label={route.label}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default Navigation;
