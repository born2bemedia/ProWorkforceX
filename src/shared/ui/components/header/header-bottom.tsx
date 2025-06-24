'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { getRoutes } from '@/shared/lib/routes';

import st from './header.module.scss';

const disabledNavigation = new Set(['/request-form']);

export function HeaderBottom() {
  const pathaname = usePathname();
  const t = useTranslations('header.routes');

  const routes = getRoutes(t);

  return !disabledNavigation.has(pathaname) ? (
    <nav aria-label="Main navigation" className={st.headerBottomLayout}>
      <ul role="menubar" className={st.nav}>
        {routes.map(({ label, href }) => (
          <li key={label} role="none">
            <Link href={href} role="menuitem">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
}
