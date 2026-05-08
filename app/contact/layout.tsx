import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Nairobi, Kenya',
  description:
    'Get in touch with the Vitora HMIS team. Email, WhatsApp, or visit our Nairobi office. Local support for your clinic or hospital.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
