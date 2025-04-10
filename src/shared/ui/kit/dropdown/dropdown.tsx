'use client';

import type { ReactNode } from 'react';
import type {
  DropdownMenuItemProps,
  DropdownMenuTriggerProps,
} from '@radix-ui/react-dropdown-menu';
import {
  Content,
  Item,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu';

import { cn } from '@/shared/lib/styles';
import { ArrowBottom } from '@/shared/ui/icons/fill';

import st from './dropdown.module.scss';

export const Dropdown = Root;
export const DropdownTrigger = ({
  className,
  children,
  ...args
}: DropdownMenuTriggerProps) => (
  <Trigger className={cn(st.trigger, className)} {...args}>
    {children}
    <ArrowBottom />
  </Trigger>
);
export const DropdownMenu = ({ children }: { children: ReactNode }) => (
  <Portal>
    <Content className={st.content} sideOffset={6}>
      {children}
    </Content>
  </Portal>
);
export const DropdownItem = ({
  children,
  className,
  ...args
}: DropdownMenuItemProps) => (
  <Item className={cn(st.item, className)} {...args}>
    {children}
  </Item>
);
