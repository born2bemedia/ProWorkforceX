'use client';

import Link from 'next/link';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './social-media.module.scss';

const socials = [
  { name: 'Facebook', url: 'https://www.facebook.com/' },
  { name: 'Instagram', url: 'https://www.instagram.com/' },
  { name: 'Twitter', url: 'https://x.com/' },
];

export function SocialMedia() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={2} className={st.title}>
          Follow Us on Social Media
        </Title>
        <Text className={st.text} color="primary">
          Stay connected with us through our social media channels for updates,
          HR insights, and business tips
        </Text>
      </section>
      <section className={st.socials}>
        {socials.map(({ url, name }) => (
          <Card key={name} name={name} url={url} />
        ))}
      </section>
    </section>
  );
}

function Card({ url, name }: { name: string; url: string }) {
  return (
    <article className={st.socialCardLayout}>
      <Title level={3}>{name}</Title>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Button variant="primaryInverted">
          Follow <ArrowTopRight />
        </Button>
      </Link>
    </article>
  );
}
