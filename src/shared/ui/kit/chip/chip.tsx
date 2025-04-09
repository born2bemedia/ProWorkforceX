'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './chip.module.css';

export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn(st.chip, className)}>{children}</span>;
}
