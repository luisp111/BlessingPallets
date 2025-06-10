import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex items-center justify-center text-white`}
    >
      <Image
        src="/gallery/Logo/Logo.jpg"
        alt="Blessing Pallets Logo"
        width={120} // Try 120–160 if needed
        height={120}
        className="w-auto h-auto"
      />
    </div>
  );
}
