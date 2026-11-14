'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/components/context/LanguageContext';
import { PastillaImage } from '@/components/ui/PastillaImage';
import { COPY, RECEPTIONS_MEDIA } from '@/data/pastilla-catalog';
import { buildEventInquiryWhatsAppUrl } from '@/lib/whatsapp-pastilla';

export function EventsBanner() {
  const { lang } = useLanguage();
  const t = COPY[lang].receptions;
  const eventWhatsappUrl = buildEventInquiryWhatsAppUrl(lang);

  return (
    <section
      id="receptions"
      className="scroll-mt-20 border-b border-saffron-bronze/15 bg-ivory-silk py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-atlantic-ink/20 bg-atlantic-ink text-ivory-silk lg:grid-cols-12">
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-6 lg:p-12">
            <p className="text-xs font-semibold tracking-wider uppercase text-golden-warqa">
              {t.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ivory-silk sm:text-4xl text-balance">
              {t.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ivory-silk/85">
              {t.description}
            </p>

            <div className="mt-8">
              <a
                href={eventWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-warqa focus-visible:ring-offset-2 focus-visible:ring-offset-atlantic-ink"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.cta}</span>
              </a>
            </div>
          </div>

          <div className="relative aspect-[16/9] w-full bg-atlantic-ink-deep lg:col-span-6 lg:aspect-auto lg:min-h-[360px]">
            <PastillaImage
              src={RECEPTIONS_MEDIA.image}
              alt={RECEPTIONS_MEDIA.alt[lang]}
              fallbackTitle={t.title}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
