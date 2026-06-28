'use client';

import Script from 'next/script';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GOOGLE_ADS_ID = 'AW-18149171806';
const CONVERSION_LABEL = 'IXlJCIfPicccEN7Emc5D';

const CONVERSION_LABELS = {
  demo_request: CONVERSION_LABEL,
  contact_form: CONVERSION_LABEL,
} as const;

export type ConversionAction = keyof typeof CONVERSION_LABELS;

/**
 * Fire a Google Ads conversion event.
 * Call this when a form submission succeeds (state.succeeded).
 */
export function trackConversion(action: ConversionAction) {
  const label = CONVERSION_LABELS[action];
  if (!label) {
    console.warn(`[Google Ads] No conversion label configured for "${action}"`);
    return;
  }
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${label}`,
    });
  }
}

export function GoogleAds() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
}
