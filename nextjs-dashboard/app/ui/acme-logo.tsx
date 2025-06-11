import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} relative w-full h-full flex items-center justify-center`}
    >
      <Image
        src="/gallery/Logo/Logo.jpg"
        alt="Blessing Pallets Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
