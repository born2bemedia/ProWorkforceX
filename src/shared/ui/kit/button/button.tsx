'use client';

import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './button.module.scss';

export function Button({
  children,
  className,
  fullWidth = false,
  uppercase = false,
  variant = 'primary',
  size = 'sm',
  ...args
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'primaryInverted' | 'outline';
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  uppercase?: boolean;
}) {
  const btnClasses = cn(
    st.btn,
    {
      [st.uppercase]: uppercase,
      [st.primaryBtn]: variant === 'primary',
      [st.primaryInvertedBtn]: variant === 'primaryInverted',
      [st.outline]: variant === 'outline',
      [st.sizeSm]: size === 'sm',
      [st.sizeMd]: size === 'md',
      [st.fullWidth]: fullWidth,
    },
    className,
  );

  return (
    <button className={btnClasses} {...args}>
      {children}
    </button>
  );
}
