import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Demo — See Vitora in Action',
  description:
    'Schedule a personalized demo of Vitora HMIS. See how to digitize your clinic operations in a free 45-60 minute session. Virtual or in-person.',
  alternates: { canonical: '/demo' },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
