'use client';

import { cn } from '@/shared/lib/styles';

import st from './divider.module.scss';

export function Divider({
  className,
  color = 'grey',
}: {
  className?: string;
  color?: 'grey' | 'primary';
}) {
  const classes = cn(
    st.divider,
    {
      [st.grayColor]: color === 'grey',
      [st.primaryColor]: color === 'primary',
    },
    className,
  );

  return <div className={classes} />;
}
