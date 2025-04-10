'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './chip.module.css';

export function Chip({
  children,
  className,
  variant = 'primary',
}: {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}) {
  return (
    <span
      className={cn(
        st.chip,
        {
          [st.primary]: variant === 'primary',
          [st.secondary]: variant === 'secondary',
        },
        className,
      )}
    >
      {children}
    </span>
  );
}
