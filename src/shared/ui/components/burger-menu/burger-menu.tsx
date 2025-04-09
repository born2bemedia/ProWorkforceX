'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Close,
  Content,
  Description,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { routes } from '@/shared/lib/routes';
import { ShortAddress } from '@/shared/ui/components/short-address';
import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { MenuIcon } from '@/shared/ui/icons/outline';
import { Text } from '@/shared/ui/kit/text';

import st from './burger-menu.module.scss';

export function BurgerMenu() {
  return (
    <section className={st.layout}>
      <Link href="/">
        <Text size="2xl">ProWorkforceX</Text>
      </Link>
      <Menu />
    </section>
  );
}

function Menu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button className={st.button}>
          <MenuIcon />
        </button>
      </Trigger>
      <Portal>
        <Content className={st.menuContent}>
          <Title />
          <Description asChild>
            <section className={st.content}>
              <section className={st.top}>
                <Link href="/">
                  <Text size="2xl">ProWorkforceX</Text>
                </Link>
                <Close className={st.closeLayout}>
                  <MenuIcon />
                </Close>
              </section>
              <ul className={st.navList}>
                {routes.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
              <footer className={st.footer}>
                <SocialNetworks iconsSize={24} />
                <ShortAddress />
              </footer>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
}
