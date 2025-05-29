import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
export default function Page() {
    return <div>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Blessing Pallets
      </h1>
      
    </div>;
  }