'use client';

import type { IconDef } from '@/shared/lib/icons';

export function ChartIcon({ height = 44, width = 44 }: IconDef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
    >
      <rect width={width} height={height} rx="22" fill="#093224" />
      <path
        d="M12.2218 12.2222V27.8667C12.2218 30.0267 13.9729 31.7778 16.1329 31.7778H31.7774M30.7996 19.0667L27.1274 23.7881C26.6707 24.3752 25.8025 24.3752 25.3458 23.7881L22.4455 20.059C22.054 19.5557 21.2933 19.5557 20.9018 20.059L17.1107 24.9333"
        stroke="#DFF56B"
        strokeWidth="1.46667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
