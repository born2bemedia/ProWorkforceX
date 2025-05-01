'use client';

import type { ReactNode } from 'react';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DTitle,
  Trigger,
} from '@radix-ui/react-dialog';

import { ThankYouOrderView } from '@/features/order-form/components/thank-you-view';
import { useOrderDialogStore } from '@/features/order-form/services/order-dialog.store';

import { CloseIcon } from '@/shared/ui/icons/fill';

import st from './order-dialog.module.scss';

export function OrderDialog({ children }: { children: ReactNode }) {
  const { open, setOpen, sent } = useOrderDialogStore();

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger />
      <Portal>
        <Overlay className={st.dialogOverlay} />
        <Content
          className={st.dialogContent}
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            {sent ? <ThankYouOrderView /> : children}
          </Description>
          <Close className={st.closeIcon}>
            <CloseIcon />
          </Close>
        </Content>
      </Portal>
    </Root>
  );
}
