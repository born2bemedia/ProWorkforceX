'use client';

import type { ReactNode } from 'react';

import st from './data-option.module.scss';

export function DataOption({
  children,
  onClick,
}: {
  children?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className={st.layout} onClick={onClick}>
      {children}
    </div>
  );
}
