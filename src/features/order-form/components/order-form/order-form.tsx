'use client';

import type { OrderFormSchema } from '@/features/order-form/lib';
import { orderFormSchema } from '@/features/order-form/lib';
import { useOrderDialogStore } from '@/features/order-form/services/order-dialog.store';
import { orderProduct } from '@/features/order-form/services/order-product.action';
import st from '@/features/request-form/components/request-form/request-form.module.scss';
import { budgets } from '@/features/request-form/lib';

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
          Begin Your Journey <br /> with ProWorkforceX
        </Title>
        <Chip variant="secondary">Let’s Shape Your Path to Career Growth</Chip>
        <Text color="primary" size="lg" weight={400}>
          Tell us about your career goals, challenges, and aspirations, and
          we’ll create a personalized plan to help you succeed. Fill out the
          form below, and let’s take the first step toward achieving your career
          ambitions.
        </Text>
      </section>
      <section className={st.formSection}>
        <Text size="2xl" weight={500}>
          Personal Data
        </Text>
        <Divider />
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Full Name"
              placeholder="Enter your full name"
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
              label="Email Address"
              placeholder="Enter your email address"
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
              label="Phone Number"
              placeholder="Enter your phone number"
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
              label="Company Name (optional)"
              placeholder="Required if your company seeks HR support for managing your workforce or business operations."
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
              label="Your Website (optional)"
              placeholder="Please provide your company's website if you feel it's relevant to understanding your business needs or HR requirements."
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
                  <Text size="lg">Your Budget Range</Text>
                  {error && <Text color="danger">{error.message}</Text>}
                </div>
                <DropdownTrigger>
                  <span className={st.placeholder}>
                    {field.value ? field.value : 'Select your investment range'}
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
          'Submitting...'
        ) : (
          <>
            Submit Your Request <ArrowTopRight />
          </>
        )}
      </Button>
    </form>
  );
}
