'use client';

import type { IconDef } from '@/shared/lib/icons';

export function XIcon({ height = 20, width = 20 }: IconDef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M1.77288 1.66667H6.67913L11.0468 7.91354L16.2916 1.66667H17.8593L11.6458 8.77083L18.3333 18.3333H13.427L8.86558 11.8104L3.23329 18.3333H1.66663L8.26767 10.9552L1.77288 1.66667Z"
        fill="#093224"
      />
    </svg>
  );
}
