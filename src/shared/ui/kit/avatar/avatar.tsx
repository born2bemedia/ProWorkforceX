'use client';

import Image from 'next/image';

import st from './avatar.module.scss';

export function Avatar({ src }: { src: string }) {
  return (
    <Image
      className={st.avatar}
      src={src}
      alt="avatar"
      width={38}
      height={38}
    />
  );
}
