'use client';

import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  Calendar,
  Check,
  Clock,
  Copy,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Users,
} from 'lucide-react';
import { useLanguage } from '@/components/context/LanguageContext';
import { useConfigurator } from '@/components/context/ConfiguratorContext';
import { Input } from '@/components/ui/input';
import {
  COPY,
  FULFILLMENT_OPTIONS,
  PASTILLA_RECIPES,
  TRAY_SIZES,
  type FulfillmentChoice,
} from '@/data/pastilla-catalog';
import {
  buildPastillaOrderText,
  buildPastillaWhatsAppUrl,
} from '@/lib/whatsapp-pastilla';

const TIME_SLOTS = [
  '12:30',
  '13:30',
  '15:00',
  '17:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
];

function getDefaultDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function PastillaConfigurator() {
  const { lang } = useLanguage();
  const {
    selectedRecipeId,
    setSelectedRecipeId,
    selectedSizeId,
    setSelectedSizeId,
    activeStep,
    setActiveStep,
  } = useConfigurator();
  const shouldReduceMotion = useReducedMotion();

  const [quantity, setQuantity] = useState<number>(1);
  const [fulfillment, setFulfillment] =
    useState<FulfillmentChoice>('retrait-rue-187');
  const [eventDate, setEventDate] = useState<string>(getDefaultDateString);
  const [preferredTime, setPreferredTime] = useState<string>('20:00');
  const [customerName, setCustomerName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const t = COPY[lang].configurator;

  const currentRecipe = useMemo(
    () =>
      PASTILLA_RECIPES.find((r) => r.id === selectedRecipeId) ??
      PASTILLA_RECIPES[0],
    [selectedRecipeId]
  );

  const currentSize = useMemo(
    () => TRAY_SIZES.find((s) => s.id === selectedSizeId) ?? TRAY_SIZES[1],
    [selectedSizeId]
  );

  const currentFulfillment = useMemo(
    () =>
      FULFILLMENT_OPTIONS.find((f) => f.id === fulfillment) ??
      FULFILLMENT_OPTIONS[1],
    [fulfillment]
  );

  const indicativeTotalMad =
    currentRecipe.indicativeBasePriceMad[currentSize.id] * quantity;

  const orderConfig = useMemo(
    () => ({
      recipeLabel: currentRecipe.title[lang],
      sizeLabel: `${currentSize.label[lang]} (${currentSize.guestsLabel[lang]})`,
      quantity,
      fulfillment,
      eventDate,
      preferredTime,
      customerName,
      notes,
      indicativeTotalMad,
      lang,
    }),
    [
      currentRecipe,
      currentSize,
      quantity,
      fulfillment,
      eventDate,
      preferredTime,
      customerName,
      notes,
      indicativeTotalMad,
      lang,
    ]
  );

  const whatsappUrl = useMemo(
    () => buildPastillaWhatsAppUrl(orderConfig),
    [orderConfig]
  );

  const handleCopySummary = async () => {
    try {
      const text = buildPastillaOrderText(orderConfig);
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const stepMotion = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -6 },
      };

  return (
    <section
      id="configurateur"
      className="scroll-mt-20 border-b border-saffron-bronze/15 bg-ivory-silk py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider uppercase text-saffron-bronze">
            {t.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-espresso-ink sm:text-4xl text-balance">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-umber">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left: 3-Step Interactive Builder */}
          <div className="rounded-2xl border border-saffron-bronze/15 bg-white p-5 sm:p-8 lg:col-span-7">
            {/* Step Tabs */}
            <div
              role="tablist"
              aria-label={t.title}
              className="grid grid-cols-3 gap-2 rounded-xl bg-parchment/75 p-1.5"
            >
              {t.steps.map((step, index) => {
                const stepNum = (index + 1) as 1 | 2 | 3;
                const isActive = activeStep === stepNum;
                return (
                  <button
                    key={step.num}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveStep(stepNum)}
                    className={`flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze ${
                      isActive
                        ? 'bg-white text-saffron-bronze shadow-xs'
                        : 'text-muted-umber hover:text-espresso-ink'
                    }`}
                  >
                    <span className="tabular-nums">{step.num}.</span>
                    <span className="truncate">{step.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 min-h-[340px]">
              <AnimatePresence mode="wait">
                {activeStep === 1 && (
                  <motion.div
                    key="step-1"
                    {...stepMotion}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="font-display text-2xl font-semibold text-espresso-ink">
                      {t.step1Title}
                    </h3>

                    <div className="mt-5 grid grid-cols-1 gap-3.5">
                      {PASTILLA_RECIPES.map((recipe) => {
                        const selected = recipe.id === selectedRecipeId;
                        return (
                          <button
                            key={recipe.id}
                            type="button"
                            onClick={() => setSelectedRecipeId(recipe.id)}
                            aria-pressed={selected}
                            className={`flex w-full items-start justify-between gap-4 rounded-xl border p-4 text-left transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze ${
                              selected
                                ? 'border-saffron-bronze bg-parchment/60'
                                : 'border-saffron-bronze/15 bg-ivory-silk/60 hover:border-saffron-bronze/40'
                            }`}
                          >
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-display text-xl font-semibold text-espresso-ink">
                                  {recipe.title[lang]}
                                </span>
                              </div>
                              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-umber">
                                {recipe.description[lang]}
                              </p>
                              <p className="mt-2 text-xs font-semibold text-saffron-bronze tabular-nums">
                                {recipe.priceRangeMad[lang]}
                              </p>
                            </div>

                            <span
                              className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                                selected
                                  ? 'border-saffron-bronze bg-saffron-bronze text-white'
                                  : 'border-saffron-bronze/30 bg-white text-transparent'
                              }`}
                              aria-hidden="true"
                            >
                              <Check className="h-3.5 w-3.5" />
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-saffron-bronze px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-saffron-bronze-dark cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze"
                      >
                        {t.nextStep}
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="step-2"
                    {...stepMotion}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="font-display text-2xl font-semibold text-espresso-ink">
                      {t.step2Title}
                    </h3>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {TRAY_SIZES.map((size) => {
                        const selected = size.id === selectedSizeId;
                        const unitPrice =
                          currentRecipe.indicativeBasePriceMad[size.id];
                        return (
                          <button
                            key={size.id}
                            type="button"
                            onClick={() => setSelectedSizeId(size.id)}
                            aria-pressed={selected}
                            className={`flex flex-col justify-between rounded-xl border p-4 text-left transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze ${
                              selected
                                ? 'border-saffron-bronze bg-parchment/60'
                                : 'border-saffron-bronze/15 bg-ivory-silk/60 hover:border-saffron-bronze/40'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <p className="font-semibold text-sm text-espresso-ink">
                                  {size.label[lang]}
                                </p>
                                <p className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-saffron-bronze">
                                  <Users className="h-3.5 w-3.5" aria-hidden="true" />
                                  <span>{size.guestsLabel[lang]}</span>
                                </p>
                              </div>
                              <span
                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                                  selected
                                    ? 'border-saffron-bronze bg-saffron-bronze text-white'
                                    : 'border-saffron-bronze/30 bg-white text-transparent'
                                }`}
                                aria-hidden="true"
                              >
                                <Check className="h-3 w-3" />
                              </span>
                            </div>

                            <div className="mt-3 flex items-baseline justify-between gap-2 border-t border-saffron-bronze/10 pt-2.5 text-xs">
                              <span className="text-muted-umber">
                                {size.diameterNote[lang]}
                              </span>
                              <span className="font-semibold text-espresso-ink tabular-nums">
                                ~{unitPrice} MAD
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Quantity Stepper */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-saffron-bronze/15 bg-ivory-silk/70 px-4 py-3.5">
                      <span className="text-sm font-medium text-espresso-ink">
                        {t.quantityLabel}
                      </span>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          aria-label="Diminuer la quantité"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-saffron-bronze/25 bg-white text-espresso-ink hover:bg-parchment transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-[2.25rem] text-center text-base font-semibold text-espresso-ink tabular-nums">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                          aria-label="Augmenter la quantité"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-saffron-bronze/25 bg-white text-espresso-ink hover:bg-parchment transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-saffron-bronze/25 px-4 py-2.5 text-sm font-medium text-espresso-ink hover:bg-parchment transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze"
                      >
                        {t.prevStep}
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveStep(3)}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-saffron-bronze px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-saffron-bronze-dark cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze"
                      >
                        {t.nextStep}
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeStep === 3 && (
                  <motion.div
                    key="step-3"
                    {...stepMotion}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="font-display text-2xl font-semibold text-espresso-ink">
                      {t.step3Title}
                    </h3>

                    {/* Fulfillment Mode */}
                    <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                      {FULFILLMENT_OPTIONS.map((option) => {
                        const active = fulfillment === option.id;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setFulfillment(option.id)}
                            aria-pressed={active}
                            className={`flex flex-col rounded-xl border p-3.5 text-left transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze ${
                              active
                                ? 'border-saffron-bronze bg-parchment/70'
                                : 'border-saffron-bronze/15 bg-ivory-silk/50 hover:border-saffron-bronze/40'
                            }`}
                          >
                            <span className="text-sm font-semibold text-espresso-ink">
                              {option.label[lang]}
                            </span>
                            <span className="mt-0.5 text-xs text-muted-umber">
                              {option.detail[lang]}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Date & Time */}
                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="pastilla-date"
                          className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-espresso-ink"
                        >
                          <Calendar className="h-3.5 w-3.5 text-saffron-bronze" aria-hidden="true" />
                          <span>{t.dateLabel}</span>
                        </label>
                        <Input
                          id="pastilla-date"
                          type="date"
                          min={getDefaultDateString()}
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="pastilla-time"
                          className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-espresso-ink"
                        >
                          <Clock className="h-3.5 w-3.5 text-saffron-bronze" aria-hidden="true" />
                          <span>{t.timeLabel}</span>
                        </label>
                        <select
                          id="pastilla-time"
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className="flex min-h-[44px] w-full rounded-lg border border-saffron-bronze/20 bg-white px-3.5 py-2.5 text-sm text-espresso-ink tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze focus-visible:border-saffron-bronze"
                        >
                          {TIME_SLOTS.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Guest Name & Notes */}
                    <div className="mt-4 grid grid-cols-1 gap-4">
                      <div>
                        <label
                          htmlFor="pastilla-name"
                          className="mb-1.5 block text-xs font-semibold text-espresso-ink"
                        >
                          {t.nameLabel}
                        </label>
                        <Input
                          id="pastilla-name"
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder={t.namePlaceholder}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="pastilla-notes"
                          className="mb-1.5 block text-xs font-semibold text-espresso-ink"
                        >
                          {t.notesLabel}
                        </label>
                        <textarea
                          id="pastilla-notes"
                          rows={2}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder={t.notesPlaceholder}
                          className="w-full rounded-lg border border-saffron-bronze/20 bg-white px-3.5 py-2.5 text-sm text-espresso-ink placeholder:text-muted-umber/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze focus-visible:border-saffron-bronze"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-start">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-saffron-bronze/25 px-4 py-2.5 text-sm font-medium text-espresso-ink hover:bg-parchment transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze"
                      >
                        {t.prevStep}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Sticky Live Order Summary Card */}
          <aside className="rounded-2xl border border-saffron-bronze/20 bg-parchment/55 p-6 sm:p-7 lg:sticky lg:top-24 lg:col-span-5">
            <div className="flex items-center justify-between border-b border-saffron-bronze/15 pb-4">
              <h3 className="font-display text-2xl font-semibold text-espresso-ink">
                {t.summaryTitle}
              </h3>
              <ShoppingBag
                className="h-5 w-5 text-saffron-bronze"
                aria-hidden="true"
              />
            </div>

            <dl className="mt-5 space-y-3.5 text-sm">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted-umber">{t.summaryRecipe}</dt>
                <dd className="text-right font-semibold text-espresso-ink">
                  {currentRecipe.shortTitle[lang]}
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted-umber">{t.summaryFormat}</dt>
                <dd className="text-right font-medium text-espresso-ink">
                  {currentSize.label[lang]} ·{' '}
                  <span className="tabular-nums">
                    {currentSize.guestsLabel[lang]}
                  </span>
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted-umber">{t.summaryQuantity}</dt>
                <dd className="text-right font-semibold text-espresso-ink tabular-nums">
                  {quantity}
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted-umber">{t.summaryMode}</dt>
                <dd className="text-right font-medium text-espresso-ink">
                  {currentFulfillment.label[lang]}
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted-umber">{t.summarySchedule}</dt>
                <dd className="text-right font-medium text-espresso-ink tabular-nums">
                  {eventDate || '—'} · {preferredTime}
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted-umber">{t.summaryGuest}</dt>
                <dd className="text-right font-medium text-espresso-ink">
                  {customerName.trim() || '—'}
                </dd>
              </div>
            </dl>

            <div className="mt-5 border-t border-saffron-bronze/15 pt-4">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-xs font-medium text-muted-umber">
                  {t.summaryEstimate}
                </span>
                <span className="font-display text-2xl font-semibold text-saffron-bronze tabular-nums">
                  ~{indicativeTotalMad} MAD
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-espresso-ink/85">
                <span className="font-semibold">{t.summaryLeadTimeLabel} :</span>{' '}
                {currentSize.leadTimeNote[lang]}
              </p>

              <p className="mt-2.5 text-xs leading-relaxed text-muted-umber">
                {t.summaryPaymentNote}
              </p>
            </div>

            {!customerName.trim() && (
              <p className="mt-4 text-xs text-saffron-bronze">
                {t.missingNameHint}
              </p>
            )}

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-silk"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.whatsappCta}</span>
              </a>

              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-saffron-bronze/25 bg-ivory-silk px-4 py-2.5 text-xs font-semibold text-espresso-ink transition-colors hover:bg-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-whatsapp" aria-hidden="true" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-saffron-bronze" aria-hidden="true" />
                )}
                <span>{copied ? t.copiedBtn : t.copyBtn}</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
