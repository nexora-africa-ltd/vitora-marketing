'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigation } from '@/lib/constants';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const menuRef = React.useRef<HTMLDivElement>(null);
  const toggleRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => { setMounted(true); }, []);

  // Close on Escape key
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={mounted && resolvedTheme === 'dark' ? '/assets/images/light-theme-logo.png' : '/assets/images/dark-theme-logo.png'}
                alt="Vitora HMIS"
                width={180}
                height={44}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.main.map((item) =>
              'children' in item && item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      'inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-teal',
                      pathname.startsWith('/solutions')
                        ? 'text-brand-teal'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full pt-2 z-50">
                      <div className="w-56 rounded-lg border bg-card shadow-lg py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2 text-sm transition-colors hover:bg-muted',
                              pathname === child.href
                                ? 'text-brand-teal'
                                : 'text-muted-foreground'
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-brand-teal',
                    pathname === item.href
                      ? 'text-brand-teal'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
            <ThemeToggle />
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-burgundy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-teal"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" ref={menuRef} className="md:hidden" role="menu">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.main.map((item) => (
              <React.Fragment key={item.name}>
                {'children' in item && item.children ? (
                  <>
                    <button
                      type="button"
                      role="menuitem"
                      className={cn(
                        'flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors',
                        pathname.startsWith('/solutions')
                          ? 'bg-brand-teal/10 text-brand-teal'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      )}
                      onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                      aria-expanded={mobileDropdown === item.name}
                    >
                      {item.name}
                      <ChevronDown className={cn('h-4 w-4 transition-transform', mobileDropdown === item.name && 'rotate-180')} />
                    </button>
                    {mobileDropdown === item.name && item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className={cn(
                          'block rounded-md px-6 py-1.5 text-sm transition-colors',
                          pathname === child.href
                            ? 'text-brand-teal'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    role="menuitem"
                    className={cn(
                      'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-brand-teal/10 text-brand-teal'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <Link
              href="/demo"
              role="menuitem"
              className="block w-full rounded-lg bg-brand-burgundy px-3 py-2 text-center text-base font-medium text-white hover:bg-brand-burgundy-800"
              onClick={() => setIsOpen(false)}
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
