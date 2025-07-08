import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';

export default function SideNav() {
  return (
    <div className="flex h-32 items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <Link
        className="flex h-28 w-80 items-center justify-center rounded-md"
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
