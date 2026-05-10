'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function TibaBotPreview() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => { setMounted(true); }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <div className="rounded-xl border bg-card shadow-hover overflow-hidden">
      <Image
        src={isDark
          ? '/assets/images/screenshots/tibabot-dark.png'
          : '/assets/images/screenshots/tibabot-light.png'
        }
        alt="TibaBot AI Clinical Assistant — answering a question about malaria treatment following Kenya MOH guidelines"
        width={1440}
        height={900}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}
