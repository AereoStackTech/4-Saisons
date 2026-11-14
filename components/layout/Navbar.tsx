'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/components/context/LanguageContext';
import { COPY } from '@/data/pastilla-catalog';

export function Navbar() {
  const { lang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = COPY[lang].nav;

  const navLinks = [
    { href: '#recettes', label: t.recipes },
    { href: '#configurateur', label: t.configurator },
    { href: '#receptions', label: t.receptions },
    { href: '#contact', label: t.location },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-saffron-bronze/15 bg-ivory-silk/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single clean text wordmark */}
        <a
          href="#hero"
          className="font-display text-2xl font-semibold tracking-tight text-saffron-bronze whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze rounded-sm"
        >
          Pastillasafi
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-espresso-ink/80"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-saffron-bronze hover:underline underline-offset-4 decoration-saffron-bronze/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA button (+ mobile drawer toggle on small viewports) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#configurateur"
            className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-saffron-bronze px-4 py-2 text-xs sm:text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-saffron-bronze-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-silk"
          >
            {t.cta}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-saffron-bronze/20 text-espresso-ink md:hidden hover:bg-parchment transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Navigation mobile"
          className="border-t border-saffron-bronze/15 bg-ivory-silk px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-espresso-ink hover:bg-parchment hover:text-saffron-bronze transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
