import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    'Schedule a personalized demo of Vitora HMIS. 45-60 minutes, virtual or in-person, completely free.',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
