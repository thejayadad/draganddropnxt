'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {FiDatabase, FiHome, FiList} from "react-icons/fi"

const links = [
    { name: 'Home', href: '/', icon: FiHome },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: FiList,
    },
    { name: 'Customers', href: '/dashboard/customers', icon: FiDatabase },
  ];

const NavLinks = () => {
    const pathname = usePathname();

  return (
    <>
    {links.map((link) => {
      const LinkIcon = link.icon;
      return (
        <Link
        key={link.name}
        href={link.href}
        className={clsx(
          'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-primary md:flex-none md:justify-start md:p-2 md:px-3',
          {
            'bg-purple-100 text-secondary': pathname === link.href,
          },
        )}
      >
        <LinkIcon className="w-6" />
        <p className="hidden md:block">{link.name}</p>
      </Link>
      );
    })}
  </>
  )
}

export default NavLinks