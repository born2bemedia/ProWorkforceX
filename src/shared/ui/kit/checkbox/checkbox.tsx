import { type ReactNode, useId } from 'react';
import { Indicator, Root } from '@radix-ui/react-checkbox';

import { CheckIcon } from '@/shared/ui/icons/fill';
import { Text } from '@/shared/ui/kit/text';

import st from './checkbox.module.scss';

export function Checkbox({
  label,
  onCheckedChange,
  checked = false,
  id,
}: {
  label?: ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
}) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <div className={st.layout}>
      <Root
        className={st.checkboxRoot}
        id={checkboxId}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Indicator className={st.checkboxIndicator}>
          <CheckIcon />
        </Indicator>
      </Root>
      <label htmlFor={checkboxId}>
        <Text color="black" weight={300} className={st.label}>
          {label}
        </Text>
      </label>
    </div>
  );
}
