'use client';

import type { IconDef } from '@/shared/lib/icons';

export function CaseIcon({ height = 44, width = 44 }: IconDef) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
    >
      <rect width={width} height={height} rx="22" fill="#093224" />
      <rect
        x="12.2218"
        y="16.1334"
        width="19.5556"
        height="15.6444"
        rx="3.91111"
        stroke="#DFF56B"
        strokeWidth="1.46667"
      />
      <path
        d="M18.0889 16.1333V15.1556C18.0889 13.5355 19.4022 12.2222 21.0223 12.2222H22.9778C24.5979 12.2222 25.9112 13.5355 25.9112 15.1556V16.1333"
        stroke="#DFF56B"
        strokeWidth="1.46667"
        strokeLinecap="round"
      />
      <path
        d="M12.2218 21.0222C12.2218 21.0222 18.1811 24.9333 21.9996 24.9333C25.818 24.9333 31.7774 21.0222 31.7774 21.0222"
        stroke="#DFF56B"
        strokeWidth="1.46667"
        strokeLinecap="round"
      />
      <path
        d="M23.9561 24.9333C23.9561 26.0134 23.0806 26.8889 22.0005 26.8889C20.9205 26.8889 20.045 26.0134 20.045 24.9333C20.045 23.8533 20.9205 22.9778 22.0005 22.9778C23.0806 22.9778 23.9561 23.8533 23.9561 24.9333Z"
        fill="#DFF56B"
      />
    </svg>
  );
}
