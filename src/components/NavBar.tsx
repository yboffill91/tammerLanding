import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Importa los iconos que necesites de Google Fonts
import { RiHomeLine, RiUser3Line, RiSettings4Line } from 'react-icons/ri';
import { IconType } from 'react-icons';

interface NavItem {
  id: number;
  text: string;
  icon: string;
  url: string;
}

interface NavbarProps {
  className?: string;
  logo: string | React.ReactNode;
  navItems: NavItem[];
  // actionButtons: React.ReactNode[];
}

const iconMap: { [key: string]: IconType } = {
  home: RiHomeLine,
  user: RiUser3Line,
  settings: RiSettings4Line,
  // Añade más iconos según sea necesario
};

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
      <div className='w-full md:w-4/5 px-4 py-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-b-lg shadow-lg fixed'>
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
                className='text-gray-800 hover:text-gray-600 transition-colors'
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
          {navItems.map((item) => {
            const Icon = iconMap[item.icon] || RiHomeLine;
            return (
              <Link
                key={item.id}
                href={item.url}
                className='text-gray-800 hover:text-gray-600 transition-colors'
              >
                <Icon size={24} />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
