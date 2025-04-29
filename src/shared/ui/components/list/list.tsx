'use client';

import st from './list.module.scss';

export function List({ values }: { values: string[] }) {
  return (
    <ul className={st.list}>
      {values.map((item, index) => {
        const [highlight, ...rest] = item.split(':');
        const remainder = rest.join(':').trim();

        return (
          <li key={index}>
            <span className={st.highlightedText}>{highlight}:</span> {remainder}
          </li>
        );
      })}
    </ul>
  );
}
