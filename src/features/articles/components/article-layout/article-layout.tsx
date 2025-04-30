'use client';

import type { ReactNode } from 'react';

import st from './article-layout.module.scss';

export function ArticleLayout({ children }: { children: ReactNode }) {
  return <article className={st.layout}>{children}</article>;
}
