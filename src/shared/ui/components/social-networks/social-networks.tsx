'use client';

import Link from 'next/link';

import { cn } from '@/shared/lib/styles';
import { FacebookIcon, InstagramIcon, XIcon } from '@/shared/ui/icons/fill';

import st from './social-networks.module.scss';

const socialNetworks = [
  { link: 'https://x.com/ProWorkForceX', icon: XIcon, label: 'x' },
  {
    link: 'https://www.instagram.com/proworkforcex/',
    icon: InstagramIcon,
    label: 'instagram',
  },
  {
    link: 'https://www.facebook.com/proworkforcex/',
    icon: FacebookIcon,
    label: 'facebook',
  },
];

export function SocialNetworks({
  iconsSize = 20,
  split = false,
}: {
  iconsSize?: number;
  split?: boolean;
}) {
  return (
    <nav aria-label="Social media links">
      <ul
        className={cn({
          [st.socialNetworks]: !split,
          [st.splitSocials]: split,
        })}
      >
        {socialNetworks.map(({ link, icon: Icon, label }) => (
          <li
            key={link}
            className={cn({
              [st.networkLayout]: !split,
            })}
          >
            <Link className={st.network} href={link} aria-label={label}>
              <Icon width={iconsSize} height={iconsSize} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
