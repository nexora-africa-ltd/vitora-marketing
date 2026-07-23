'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const immersiveRoutes = new Set([
  '/marketing-pitch',
  '/financial-model',
  '/pitch-deck',
]);

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = pathname !== null && immersiveRoutes.has(pathname);

  if (hideChrome) {
    return <main id="main-content" className="flex-1">{children}</main>;
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
