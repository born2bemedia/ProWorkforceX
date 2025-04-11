'use client';

import type { ReactNode } from 'react';

import st from './request-scroll-container.module.scss';

export function RequestScrollContainer({ children }: { children: ReactNode }) {
  return <section className={st.layout}>{children}</section>;
}
