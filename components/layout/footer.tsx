import Link from 'next/link';
import { navigation, siteConfig } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="font-bold text-xl text-brand-burgundy dark:text-white">
                Vitora <span className="text-brand-teal">HMIS</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {siteConfig.description}
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Social links can be added here */}
            </div>
          </div>

          {/* Navigation columns */}
          {navigation.footer.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-brand-teal transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nexora Africa Ltd. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built for Kenya&apos;s healthcare infrastructure
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
