'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import NavLink from './nav-link';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

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
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="z-50  bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-transform duration-300"
      >
        {isOpen ? (
          <FiX className="h-6 w-6 transition-transform duration-300" />
        ) : (
          <FiMenu className="h-6 w-6 transition-transform duration-300" />
        )}
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Logo</h1>
          <button onClick={toggleMenu} className="text-gray-800">
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Links Section */}
        <nav className="flex flex-col gap-4 p-6">
          {routes.map((route) => (
            <NavLink key={route.href} href={route.href} label={route.label} />
          ))}
        </nav>

        {/* Footer Section */}
        <footer className="absolute bottom-4 left-0 right-0 p-4 text-center text-sm text-gray-500 border-t border-gray-200">
          &copy; {new Date().getFullYear()} Your Company
        </footer>
      </div>
    </div>
  );
};

export default MobileMenu;
