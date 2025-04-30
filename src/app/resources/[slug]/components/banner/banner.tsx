'use client';

import Image from 'next/image';

import st from './banner.module.scss';

export function Banner({ imgUrl }: { imgUrl: string }) {
  return (
    <section className={st.layout}>
      <Image
        className={st.img}
        src={imgUrl}
        alt="banner"
        width={1000}
        height={343}
        unoptimized
      />
    </section>
  );
}
