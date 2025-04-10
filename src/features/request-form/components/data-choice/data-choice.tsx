'use client';

import type { ReactNode } from 'react';

import { CloseIcon } from '@/shared/ui/icons/fill';

import st from './data-choice.module.scss';

export function DataChoice({
  children,
  onCancel,
}: {
  children: ReactNode;
  onCancel: () => void;
}) {
  return (
    <span className={st.choice}>
      {children} <div className={st.separator} />{' '}
      <span className={st.cancelIcon} onClick={onCancel}>
        <CloseIcon />
      </span>
    </span>
  );
}
