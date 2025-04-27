'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './layout.module.scss';

export function Layout({
  children,
  className,
  gap = 14,
  direction = 'row',
  justify = 'flex-start',
}: {
  children: ReactNode;
  gap?: number;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-start'
    | 'flex-end';
  className?: string;
}) {
  return (
    <section
      className={cn(st.layout, className)}
      style={{ gap, flexDirection: direction, justifyContent: justify }}
    >
      {children}
    </section>
  );
}
