'use client';

import type { HTMLAttributes } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './text.module.scss';

export function Text({
  className,
  children,
  color = 'black',
  uppercase = false,
  weight = 400,
  size = 'base',
}: HTMLAttributes<HTMLParagraphElement> & {
  color?:
    | 'gray600'
    | 'black'
    | 'white'
    | 'primary'
    | 'danger'
    | 'neutral'
    | 'secondary';
  uppercase?: boolean;
  weight?: 300 | 400 | 500 | 600;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
}) {
  const textClasses = cn(
    st.text,
    {
      [st.colorPrimary]: color === 'primary',
      [st.colorBlack]: color === 'black',
      [st.colorGray600]: color === 'gray600',
      [st.colorWhite]: color === 'white',
      [st.colorDanger]: color === 'danger',
      [st.colorNeutral]: color === 'neutral',
      [st.colorSecondary]: color === 'secondary',
      [st.uppercase]: uppercase,
      [st.weight300]: weight === 300,
      [st.weight400]: weight === 400,
      [st.weight500]: weight === 500,
      [st.weight600]: weight === 600,
      [st.sizeSm]: size === 'sm',
      [st.sizeBase]: size === 'base',
      [st.sizeLg]: size === 'lg',
      [st.sizeXl]: size === 'xl',
      [st.sizeXxl]: size === '2xl',
      [st.sizeXxxl]: size === '3xl',
    },
    className,
  );

  return <p className={textClasses}>{children}</p>;
}
