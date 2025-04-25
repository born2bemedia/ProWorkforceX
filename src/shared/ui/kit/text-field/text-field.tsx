'use client';

import type { InputHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';

import st from './text-field.module.scss';

export function TextField({
  className,
  label,
  hint,
  intent = 'primary',
  color = 'gray',
  rounded = 'full',
  ...args
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  intent?: 'primary' | 'danger';
  color?: 'gray' | 'white';
  rounded?: 'full' | 'sm';
}) {
  const inputClasses = cn(
    st.textField,
    {
      [st.gray]: color === 'gray',
      [st.white]: color === 'white',
      [st.roundedSm]: rounded === 'sm',
      [st.roundedFull]: rounded === 'full',
      [st.dangerIntent]: intent === 'danger',
    },
    className,
  );

  return (
    <label className={st.layout}>
      <div className={st.label}>
        <Text color="primary" size="lg">
          {label}
        </Text>
        {hint && (
          <Text color="danger" className={st.hint}>
            ({hint})
          </Text>
        )}
      </div>
      <input className={inputClasses} {...args} />
    </label>
  );
}
