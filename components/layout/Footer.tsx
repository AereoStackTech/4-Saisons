'use client';

import React from 'react';
import { useLanguage } from '@/components/context/LanguageContext';
import { BRAND_INFO, COPY } from '@/data/pastilla-catalog';

export function Footer() {
  const { lang } = useLanguage();
  const t = COPY[lang].footer;
  const nav = COPY[lang].nav;

  return (
    <footer className="bg-atlantic-ink-deep text-ivory-silk">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-ivory-silk/15 pb-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold tracking-tight text-golden-warqa">
              {BRAND_INFO.name}
            </p>
            <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-ivory-silk/80">
              {t.tagline}
            </p>
            <p className="mt-3 text-xs text-ivory-silk/65">{t.upgradeNote}</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-golden-warqa">
              Navigation
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ivory-silk/80">
              <li>
                <a href="#recettes" className="hover:text-ivory-silk transition-colors">
                  {nav.recipes}
                </a>
              </li>
              <li>
                <a
                  href="#configurateur"
                  className="hover:text-ivory-silk transition-colors"
                >
                  {nav.configurator}
                </a>
              </li>
              <li>
                <a href="#receptions" className="hover:text-ivory-silk transition-colors">
                  {nav.receptions}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-ivory-silk transition-colors">
                  {nav.location}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-golden-warqa">
              Contact
            </p>
            <div className="mt-3 space-y-2 text-sm text-ivory-silk/80">
              <p>{lang === 'en' ? BRAND_INFO.addressEn : BRAND_INFO.address}</p>
              <p>
                <a
                  href={BRAND_INFO.phoneHref}
                  className="font-semibold text-ivory-silk tabular-nums hover:text-golden-warqa transition-colors"
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={BRAND_INFO.domainUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-golden-warqa transition-colors underline underline-offset-4"
                >
                  {BRAND_INFO.domain}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-ivory-silk/65">
          <p>{t.rights}</p>
          <p>{BRAND_INFO.plusCode}</p>
        </div>
      </div>
    </footer>
  );
}
