'use client';

import { useTranslations } from 'next-intl';

import type { OrderFormSchema } from '@/features/order-form/lib';
import { createOrderFormSchema } from '@/features/order-form/lib';
import { useOrderDialogStore } from '@/features/order-form/services/order-dialog.store';
import { orderProduct } from '@/features/order-form/services/order-product.action';
import st from '@/features/request-form/components/request-form/request-form.module.scss';
import { getBudgets } from '@/features/request-form/lib';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Chip } from '@/shared/ui/kit/chip';
import { Divider } from '@/shared/ui/kit/divider';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@/shared/ui/kit/dropdown';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

export function OrderForm() {
  const { product, setOpen, setSent } = useOrderDialogStore();
  const te = useTranslations('orderForm.errors');
  const tb = useTranslations('budgets');
  const t = useTranslations('orderForm');

  const orderFormSchema = createOrderFormSchema(te);
  const budgets = getBudgets(tb);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<OrderFormSchema>({
    resolver: zodResolver(orderFormSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      budget: '',
      phone: '',
      email: '',
      companyName: '',
      fullName: '',
      website: '',
    },
  });

  const onSubmit = handleSubmit(async (data: OrderFormSchema) => {
    if (product) {
      try {
        await orderProduct({ ...data, product });
        setSent(true);
      } catch (e) {
        console.error('Error sending form:', e);
        setOpen(false);
      }
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <section className={st.titleLayout}>
        <Title level={3}>
          {t('title.0')} <br /> {t('title.1')}
        </Title>
        <Chip variant="secondary">{t('label')}</Chip>
        <Text color="primary" size="lg" weight={400}>
          {t('text')}
        </Text>
      </section>
      <section className={st.formSection}>
        <Text size="2xl" weight={500}>
          {t('personalData.title')}
        </Text>
        <Divider />
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label={t('personalData.fields.fullName.label')}
              placeholder={t('personalData.fields.fullName.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label={t('personalData.fields.email.label')}
              placeholder={t('personalData.fields.email.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
              type="email"
              {...field}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label={t('personalData.fields.phone.label')}
              placeholder={t('personalData.fields.phone.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="companyName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextArea
              label={t('personalData.fields.companyName.label')}
              placeholder={t('personalData.fields.companyName.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
              height={72}
              {...field}
            />
          )}
        />
        <Controller
          name="website"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextArea
              label={t('personalData.fields.website.label')}
              placeholder={t('personalData.fields.website.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
              height={72}
              {...field}
            />
          )}
        />
        <Controller
          name="budget"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <div>
              <Dropdown>
                <div className={st.titleLabel}>
                  <Text size="lg">{t('personalData.fields.budget.label')}</Text>
                  {error && <Text color="danger">{error.message}</Text>}
                </div>
                <DropdownTrigger>
                  <span className={st.placeholder}>
                    {field.value
                      ? field.value
                      : t('personalData.fields.budget.placeholder')}
                  </span>
                </DropdownTrigger>
                <DropdownMenu>
                  {budgets.map(item => (
                    <DropdownItem
                      key={item}
                      onSelect={() => field.onChange(item)}
                    >
                      {item}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          )}
        />
      </section>
      <Button
        size="md"
        variant="primaryInverted"
        className={st.submitBtn}
        disabled={isSubmitting}
        fullWidth
      >
        {isSubmitting ? (
          t('sending')
        ) : (
          <>
            {t('submit')} <ArrowTopRight />
          </>
        )}
      </Button>
    </form>
  );
}
