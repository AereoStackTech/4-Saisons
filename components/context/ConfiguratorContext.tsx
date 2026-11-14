'use client';

import React, { createContext, useContext, useState } from 'react';
import type { PastillaRecipeId, TraySizeId } from '@/data/pastilla-catalog';

interface ConfiguratorContextValue {
  selectedRecipeId: PastillaRecipeId;
  setSelectedRecipeId: (id: PastillaRecipeId) => void;
  selectedSizeId: TraySizeId;
  setSelectedSizeId: (id: TraySizeId) => void;
  activeStep: 1 | 2 | 3;
  setActiveStep: (step: 1 | 2 | 3) => void;
  selectRecipeAndScroll: (id: PastillaRecipeId) => void;
}

const ConfiguratorContext = createContext<ConfiguratorContextValue | null>(null);

export function ConfiguratorProvider({ children }: { children: React.ReactNode }) {
  const [selectedRecipeId, setSelectedRecipeId] =
    useState<PastillaRecipeId>('fruits-de-mer');
  const [selectedSizeId, setSelectedSizeId] = useState<TraySizeId>('moyenne-6');
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  const selectRecipeAndScroll = (id: PastillaRecipeId) => {
    setSelectedRecipeId(id);
    setActiveStep(2);
    const el = document.getElementById('configurateur');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ConfiguratorContext.Provider
      value={{
        selectedRecipeId,
        setSelectedRecipeId,
        selectedSizeId,
        setSelectedSizeId,
        activeStep,
        setActiveStep,
        selectRecipeAndScroll,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
}

export function useConfigurator() {
  const ctx = useContext(ConfiguratorContext);
  if (!ctx) {
    throw new Error('useConfigurator must be used inside ConfiguratorProvider');
  }
  return ctx;
}
