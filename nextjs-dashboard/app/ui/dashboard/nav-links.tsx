'use client';
import {
  UserGroupIcon,
  HomeIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Gallery', href: '/dashboard/gallery', icon: PhotoIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex items-center space-x-1 md:space-x-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-8 md:h-10 items-center justify-center gap-1 md:gap-2 rounded-md px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900',
              {
                'bg-gray-100 text-gray-900': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
