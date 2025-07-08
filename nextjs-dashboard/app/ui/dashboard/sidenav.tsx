import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';

export default function SideNav() {
  return (
    <div className="flex h-16 md:h-24 items-center justify-between px-4 md:px-6 py-2 md:py-4 bg-white border-b border-gray-200">
      <Link
        className="flex h-12 w-32 md:h-20 md:w-60 items-center justify-center rounded-md"
        href="/"
      >
        <div className="w-full h-full flex items-center justify-center">
          <AcmeLogo />
        </div>
      </Link>
      <NavLinks />
    </div>
  );
}
