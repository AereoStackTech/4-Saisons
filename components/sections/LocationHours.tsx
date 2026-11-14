'use client';

import React from 'react';
import { Clock, ExternalLink, Globe, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '@/components/context/LanguageContext';
import { BRAND_INFO, COPY } from '@/data/pastilla-catalog';

export function LocationHours() {
  const { lang } = useLanguage();
  const t = COPY[lang].location;

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-parchment/45 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider uppercase text-saffron-bronze">
            {t.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-espresso-ink sm:text-4xl text-balance">
            {t.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between rounded-2xl border border-saffron-bronze/15 bg-ivory-silk p-6 sm:p-8 lg:col-span-5">
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-saffron-bronze">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{t.addressLabel}</span>
                </dt>
                <dd className="mt-1.5 font-medium text-espresso-ink">
                  {lang === 'en' ? BRAND_INFO.addressEn : BRAND_INFO.address}
                  <span className="mt-0.5 block text-xs text-muted-umber">
                    {BRAND_INFO.plusCode}
                  </span>
                </dd>
              </div>

              <div>
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-saffron-bronze">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{t.hoursLabel}</span>
                </dt>
                <dd className="mt-1.5 font-medium text-espresso-ink">
                  {t.hoursValue}
                </dd>
              </div>

              <div>
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-saffron-bronze">
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{t.phoneLabel}</span>
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="font-semibold text-espresso-ink tabular-nums hover:text-saffron-bronze transition-colors"
                  >
                    {BRAND_INFO.phoneDisplay}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-saffron-bronze">
                  <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{t.webLabel}</span>
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={BRAND_INFO.domainUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-espresso-ink hover:text-saffron-bronze transition-colors"
                  >
                    <span>{BRAND_INFO.domain}</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BRAND_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-atlantic-ink px-4 py-2.5 text-xs sm:text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-atlantic-ink-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlantic-ink"
              >
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.directionsCta}</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-xs sm:text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.whatsappDirectCta}</span>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-saffron-bronze/15 bg-ivory-silk lg:col-span-7">
            <iframe
              title="Carte Google Maps — Pastillasafi, RUE 187, Safi 46000"
              src={BRAND_INFO.googleMapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[340px] w-full border-0 lg:h-full lg:min-h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
