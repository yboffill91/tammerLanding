import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavItem } from '@/constants';

interface NavbarProps {
  className?: string;
  logo: string | React.ReactNode;
  navItems: NavItem[];
  // actionButtons: React.ReactNode[];
}

export default function Navbar({
  className = '',
  logo,
  navItems,
}: // actionButtons,
NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center ${className}`}
    >
      <div className='w-full md:w-4/5 p-5 bg-blue-500/10 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-b-lg shadow-lg'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            {typeof logo === 'string' ? (
              logo
            ) : (
              <Image src={logo} alt='Logo' width={40} height={40} />
            )}
          </div>

          <div className='hidden md:flex space-x-4'>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className='text-slate-200 hover:text-orange-500 transition-colors ease-linear'
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* <div className='flex items-center space-x-2'>
            <div className='hidden md:flex space-x-2'>{actionButtons}</div>
            <div className='md:hidden'>{actionButtons[0]}</div>
          </div> */}
        </div>

        <div className='md:hidden flex justify-around mt-2'>
          {navItems.map((item) => (
            <Link key={item.id} href={item.url} className='text-orange-500'>
              <item.icon size={24} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
