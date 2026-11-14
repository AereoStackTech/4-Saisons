'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/context/LanguageContext';
import { useConfigurator } from '@/components/context/ConfiguratorContext';
import { PastillaImage } from '@/components/ui/PastillaImage';
import { COPY, PASTILLA_RECIPES } from '@/data/pastilla-catalog';

export function RecipesShowcase() {
  const { lang } = useLanguage();
  const { selectRecipeAndScroll } = useConfigurator();
  const t = COPY[lang].recipes;

  return (
    <section
      id="recettes"
      className="scroll-mt-20 border-b border-saffron-bronze/15 bg-parchment/45 py-16 lg:py-20"
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

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PASTILLA_RECIPES.map((recipe) => {
            const isAtlantic = recipe.accentTone === 'atlantic';
            return (
              <article
                key={recipe.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border transition-transform duration-150 hover:-translate-y-0.5 ${
                  isAtlantic
                    ? 'border-atlantic-ink/25 bg-atlantic-ink text-ivory-silk'
                    : 'border-saffron-bronze/15 bg-ivory-silk text-espresso-ink'
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-parchment">
                  <PastillaImage
                    src={recipe.image}
                    alt={recipe.imageAlt[lang]}
                    fallbackTitle={recipe.title[lang]}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p
                    className={`text-xs font-medium ${
                      isAtlantic ? 'text-golden-warqa' : 'text-saffron-bronze'
                    }`}
                  >
                    {recipe.kicker[lang]}
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold leading-snug tracking-tight text-balance">
                    {recipe.title[lang]}
                  </h3>

                  <p
                    className={`mt-2.5 flex-1 text-sm leading-relaxed ${
                      isAtlantic ? 'text-ivory-silk/85' : 'text-muted-umber'
                    }`}
                  >
                    {recipe.description[lang]}
                  </p>

                  <p
                    className={`mt-4 border-t pt-3 text-xs ${
                      isAtlantic
                        ? 'border-ivory-silk/15 text-ivory-silk/75'
                        : 'border-saffron-bronze/15 text-muted-umber'
                    }`}
                  >
                    {recipe.ingredientsNote[lang]}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold tabular-nums">
                      {recipe.priceRangeMad[lang]}
                    </span>

                    <button
                      type="button"
                      onClick={() => selectRecipeAndScroll(recipe.id)}
                      className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 ${
                        isAtlantic
                          ? 'bg-golden-warqa text-atlantic-ink-deep hover:bg-golden-warqa/90 focus-visible:ring-golden-warqa'
                          : 'bg-saffron-bronze text-white hover:bg-saffron-bronze-dark focus-visible:ring-saffron-bronze'
                      }`}
                    >
                      <span>{t.selectAction}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted-umber">
          {t.disclaimer}
        </p>
      </div>
    </section>
  );
}
