'use client';

import React from 'react';
import { ArrowRight, ChefHat, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/components/context/LanguageContext';
import { PastillaImage } from '@/components/ui/PastillaImage';
import { COPY, HERO_MEDIA } from '@/data/pastilla-catalog';

export function HeroSection() {
  const { lang, setLang } = useLanguage();
  const t = COPY[lang].hero;

  return (
    <section id="hero" className="border-b border-saffron-bronze/15 bg-ivory-silk">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-12 sm:px-6 lg:px-8 lg:pt-10 lg:pb-16">
        {/* Clean unboxed top utility row: location/hours metadata + FR/EN switch */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-saffron-bronze/10 pb-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium text-muted-umber">
            <span className="inline-flex items-center gap-1.5 text-saffron-bronze">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.statusLine}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-saffron-bronze/75" aria-hidden="true" />
              <span>7Q32+5X Safi</span>
            </span>
          </div>

          <div
            role="group"
            aria-label="Langue / Language"
            className="inline-flex items-center gap-1 rounded-lg border border-saffron-bronze/15 bg-parchment/70 p-1"
          >
            <button
              type="button"
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
              className={`min-h-[32px] rounded-md px-2.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze ${
                lang === 'fr'
                  ? 'bg-white text-saffron-bronze shadow-xs'
                  : 'text-muted-umber hover:text-espresso-ink'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`min-h-[32px] rounded-md px-2.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze ${
                lang === 'en'
                  ? 'bg-white text-saffron-bronze shadow-xs'
                  : 'text-muted-umber hover:text-espresso-ink'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* 2-Column Editorial Hero Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-6">
            <h1 className="font-display text-[clamp(2.25rem,4vw,3.65rem)] font-semibold leading-[1.08] tracking-tight text-espresso-ink text-balance">
              {t.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-umber sm:text-lg">
              {t.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#configurateur"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-saffron-bronze px-6 py-3 text-sm sm:text-base font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-saffron-bronze-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-silk"
              >
                <ChefHat className="h-4 w-4" aria-hidden="true" />
                <span>{t.primaryCta}</span>
              </a>

              <a
                href="#recettes"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-saffron-bronze/25 bg-ivory-silk px-5 py-3 text-sm sm:text-base font-medium text-espresso-ink whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-parchment hover:border-saffron-bronze/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-silk"
              >
                <span>{t.secondaryCta}</span>
                <ArrowRight className="h-4 w-4 text-saffron-bronze" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-saffron-bronze/15 bg-parchment lg:h-full lg:min-h-[380px]">
              <PastillaImage
                src={HERO_MEDIA.image}
                alt={HERO_MEDIA.alt[lang]}
                fallbackTitle="Pastillasafi — Safi"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Full-Width Craft Strip */}
        <div className="mt-10 grid grid-cols-1 gap-4 border-t border-saffron-bronze/15 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.craftStrip.map((item, idx) => (
            <div
              key={item}
              className="flex items-baseline gap-2.5 text-sm font-medium text-espresso-ink/85"
            >
              <span className="font-display text-base font-semibold text-saffron-bronze tabular-nums">
                0{idx + 1}.
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
