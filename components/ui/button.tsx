import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 rounded-lg text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-silk disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-saffron-bronze text-white hover:bg-saffron-bronze-dark shadow-xs',
        whatsapp:
          'bg-whatsapp text-white hover:bg-whatsapp-hover shadow-xs',
        atlantic:
          'bg-atlantic-ink text-white hover:bg-atlantic-ink-deep shadow-xs',
        outline:
          'border border-saffron-bronze/25 bg-ivory-silk text-espresso-ink hover:bg-parchment hover:border-saffron-bronze/45',
        ghost:
          'text-espresso-ink hover:bg-parchment',
      },
      size: {
        default: 'min-h-[44px] px-5 py-2.5',
        sm: 'min-h-[40px] px-4 py-2 text-xs',
        lg: 'min-h-[48px] px-6 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
