'use client';

import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DTitle,
} from '@radix-ui/react-dialog';

import { CloseIcon } from '@/shared/ui/icons/fill';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './success-dialog.module.scss';

export function SuccessDialog({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <Root open={isOpen} onOpenChange={setOpen}>
      <Portal>
        <Overlay className={st.dialogOverlay} />
        <Content className={st.dialogContent}>
          <DTitle />
          <Description asChild>
            <section className={st.desc}>
              <Title level={3}>Success!</Title>
              <Text color="primary">
                Thank you for choosing ProWorkforceX! Our representative will
                reach out to you shortly.
              </Text>
            </section>
          </Description>
          <Close className={st.close}>
            <CloseIcon />
          </Close>
        </Content>
      </Portal>
    </Root>
  );
}
