'use client';

import type { InputHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';
import { st } from '@/shared/ui/kit/text-field';

import textareaSt from './text-area.module.scss';

export function TextArea({
  className,
  label,
  hint,
  height,
  intent = 'primary',
  ...args
}: InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  hint?: string;
  intent?: 'primary' | 'danger';
  height?: number;
}) {
  const textareaClasses = cn(
    st.textField,
    textareaSt.textArea,
    {
      [st.dangerIntent]: intent === 'danger',
    },
    className,
  );

  return (
    <label className={st.layout}>
      <div className={st.label}>
        <Text color="black" size="lg">
          {label}
        </Text>
        {hint && (
          <Text color="black" className={st.hint}>
            {hint}
          </Text>
        )}
      </div>
      <textarea
        className={textareaClasses}
        style={{ height: height ? `${height}px` : '128px' }}
        {...args}
      />
    </label>
  );
}
