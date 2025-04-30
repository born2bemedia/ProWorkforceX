'use client';

import type { ReactNode } from 'react';

import st from './article-header.module.scss';

export function ArticleHeader({ children }: { children: ReactNode }) {
  return <h4 className={st.header}>{children}</h4>;
}
