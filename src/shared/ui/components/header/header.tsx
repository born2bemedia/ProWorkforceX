'use client';

import { BurgerMenu } from '@/shared/ui/components/burger-menu';

import st from './header.module.scss';
import { HeaderBottom } from './header-bottom';
import { HeaderTop } from './header-top';

export function Header() {
  return (
    <header className={st.layout}>
      <HeaderTop />
      <HeaderBottom />
      <BurgerMenu />
    </header>
  );
}
