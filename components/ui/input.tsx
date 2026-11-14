import * as React from 'react';
import { cn } from '@/lib/utils';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        'flex min-h-[44px] w-full rounded-lg border border-saffron-bronze/20 bg-white px-3.5 py-2.5 text-sm text-espresso-ink placeholder:text-muted-umber/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze focus-visible:border-saffron-bronze disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
});
Input.displayName = 'Input';
