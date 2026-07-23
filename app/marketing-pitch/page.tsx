import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Pitch',
  description: 'Vitora marketing pitch document.',
  alternates: {
    canonical: '/marketing-pitch',
  },
};

export default function MarketingPitchPage() {
  return (
    <section className="flex h-[100dvh] w-full flex-col bg-background">
      <div className="flex min-h-14 items-center justify-between gap-3 border-b px-4 sm:px-6">
        <h1 className="text-base font-semibold text-brand-burgundy dark:text-white sm:text-lg">
          Marketing Pitch
        </h1>
        <a
          href="/marketing-pitch.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-brand-teal px-3 py-1.5 text-xs font-semibold text-brand-teal transition-colors hover:bg-brand-teal/10 sm:px-4 sm:py-2 sm:text-sm"
        >
          Open in new tab
        </a>
      </div>

      <iframe
        title="Vitora marketing pitch"
        src="/marketing-pitch.html"
        className="h-[calc(100dvh-3.5rem)] w-full border-0"
      />
    </section>
  );
}
