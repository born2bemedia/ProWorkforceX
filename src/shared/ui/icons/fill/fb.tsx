'use client';

import type { IconDef } from '@/shared/lib/icons';

export function FacebookIcon({ height = 20, width = 20 }: IconDef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M18.3333 10C18.3333 5.4 14.6 1.66667 9.99996 1.66667C5.39996 1.66667 1.66663 5.4 1.66663 10C1.66663 14.0333 4.53329 17.3917 8.33329 18.1667V12.5H6.66663V10H8.33329V7.91667C8.33329 6.30833 9.64163 5 11.25 5H13.3333V7.5H11.6666C11.2083 7.5 10.8333 7.875 10.8333 8.33333V10H13.3333V12.5H10.8333V18.2917C15.0416 17.875 18.3333 14.325 18.3333 10Z"
        fill="#093224"
      />
    </svg>
  );
}
