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

import { CloseIcon } from '@/shared/ui/icons/fill';

import { useRequestDialogStore } from '../../services';
import { ThankYouView } from '../thank-you-view';
import st from './request-dialog.module.scss';

export function RequestDialog({ children }: { children: ReactNode }) {
  const { open, setOpen, setProduct, sent } = useRequestDialogStore();

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setProduct(undefined);
    }
  };

  return (
    <Root open={open} onOpenChange={handleOpenChange}>
      <Trigger />
      <Portal>
        <Overlay className={st.dialogOverlay} />
        <Content
          className={st.dialogContent}
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            {sent ? <ThankYouView /> : children}
          </Description>
          <Close className={st.closeIcon}>
            <CloseIcon />
          </Close>
        </Content>
      </Portal>
    </Root>
  );
}
