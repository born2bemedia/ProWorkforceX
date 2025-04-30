'use client';

import { cn } from '@/shared/lib/styles';

import st from './list.module.scss';

export function List({
  values,
  gap = 8,
  opacityText = true,
  weight = 400,
}: {
  values: string[];
  gap?: number;
  opacityText?: boolean;
  weight?: 300 | 400;
}) {
  return (
    <ul className={st.list} style={{ gap: `${gap}px` }}>
      {values.map((item, index) => {
        const [highlight, ...rest] = item.split(':');
        const remainder = rest.join(':').trim();

        return (
          <li
            key={index}
            className={cn(
              opacityText ? st.opacityText : st.defaultText,
              weight === 400 ? st.weight400 : st.weight300,
            )}
          >
            <span className={st.highlightedText}>{highlight}:</span> {remainder}
          </li>
        );
      })}
    </ul>
  );
}
