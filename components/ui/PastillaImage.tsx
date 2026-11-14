'use client';

import React, { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { UtensilsCrossed } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PastillaImageProps {
  src: StaticImageData;
  alt: string;
  fallbackTitle: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function PastillaImage({
  src,
  alt,
  fallbackTitle,
  priority = false,
  className,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: PastillaImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          'relative flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-parchment via-ivory-silk to-golden-warqa/20 p-6 text-center',
          className
        )}
        role="img"
        aria-label={alt}
      >
        <UtensilsCrossed className="h-8 w-8 text-saffron-bronze/70" aria-hidden="true" />
        <p className="font-display text-xl font-semibold text-espresso-ink">
          {fallbackTitle}
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={cn('object-cover', className)}
    />
  );
}
