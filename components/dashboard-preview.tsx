'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function DashboardPreview() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => { setMounted(true); }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <div className="relative">
      {/* Desktop screenshot */}
      <div className="rounded-xl border bg-card shadow-hover overflow-hidden">
        <Image
          src={isDark
            ? '/assets/images/screenshots/dashboard-dark.png'
            : '/assets/images/screenshots/dashboard-light.png'
          }
          alt="Vitora HMIS Dashboard — real-time patient stats, triage queue, billing, scheduling, and clinical modules"
          width={1440}
          height={900}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Mobile phone overlay — hidden on small screens */}
      <div className="hidden sm:block absolute -bottom-6 -right-4 lg:-right-8 w-[120px] lg:w-[160px]">
        <div className="rounded-[20px] border-[3px] border-foreground/20 bg-card shadow-2xl overflow-hidden">
          {/* Phone notch */}
          <div className="h-3 bg-foreground/10 flex justify-center items-end pb-0.5">
            <div className="w-8 h-1 rounded-full bg-foreground/20" />
          </div>
          <Image
            src={isDark
              ? '/assets/images/screenshots/dashboard-mobile-dark.png'
              : '/assets/images/screenshots/dashboard-mobile-light.png'
            }
            alt="Vitora HMIS mobile dashboard"
            width={393}
            height={852}
            className="w-full h-auto"
          />
          {/* Phone home indicator */}
          <div className="h-3 bg-foreground/10 flex justify-center items-center">
            <div className="w-8 h-1 rounded-full bg-foreground/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
