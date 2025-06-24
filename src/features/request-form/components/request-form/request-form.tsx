'use client';

import { useTranslations } from 'next-intl';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { Dropdzone } from '@/shared/ui/components/dropzone';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
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

import {
  createRequestFormSchema,
  getBudgets,
  getContactMethods,
  getServices,
  getTimelines,
  type RequestFormSchema,
} from '../../lib';
import { sendRequestForm, useRequestDialogStore } from '../../services';
import { DataChoice } from '../data-choice';
import st from './request-form.module.scss';

export function RequestForm({ className }: { className?: string }) {
  const te = useTranslations('requestForm.errors');
  const ts = useTranslations('services');
  const tb = useTranslations('budgets');
  const tt = useTranslations('timelines');
  const tc = useTranslations('contactMethods');
  const t = useTranslations('requestForm');

  const { setOpen, setSent } = useRequestDialogStore();

  const services = getServices(ts);
  const budgets = getBudgets(tb);
  const timelines = getTimelines(tt);
  const contactMethods = getContactMethods(tc);

  const requestFormSchema = createRequestFormSchema(te);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<RequestFormSchema>({
    resolver: zodResolver(requestFormSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      budget: '',
      companyName: '',
      contactMethod: '',
      file: undefined,
      email: '',
      fullName: '',
      goals: '',
      industry: '',
      jobRoles: '',
      phone: '',
      projectTimeline: '',
      services: [],
      website: '',
      careerInterests: '',
      skills: '',
    },
  });

  const onSubmit = handleSubmit(async (data: RequestFormSchema) => {
    try {
      await sendRequestForm(data);
      setSent(true);
    } catch (e) {
      console.error('Error sending form:', e);
      setOpen(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className={className}>
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
      </section>
      <section className={st.formSection}>
        <Text size="2xl" weight={500}>
          {t('careerAndHRPreferences.title')}
        </Text>
        <Divider />
        <Controller
          name="services"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Dropdown>
              {error && <Text color="danger">{error.message}</Text>}
              <DropdownTrigger>
                <div className={st.hrData}>
                  {field.value.length ? (
                    field.value.map(value => (
                      <DataChoice
                        key={value}
                        onCancel={() =>
                          field.onChange(field.value.filter(v => v !== value))
                        }
                      >
                        {value}
                      </DataChoice>
                    ))
                  ) : (
                    <span className={st.placeholder}>
                      {t('careerAndHRPreferences.fields.services.label')}
                    </span>
                  )}
                </div>
              </DropdownTrigger>
              <DropdownMenu>
                {services.map(item => (
                  <DropdownItem
                    key={item}
                    onSelect={e => {
                      e.preventDefault();
                      const updatedServices = field.value.includes(item)
                        ? field.value.filter(v => v !== item)
                        : [...field.value, item];
                      field.onChange(updatedServices);
                    }}
                  >
                    <Checkbox checked={field.value.includes(item)} />
                    {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          )}
        />
        <Controller
          name="budget"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <div>
              <Dropdown>
                <div className={st.titleLabel}>
                  <Text size="lg">
                    {t('careerAndHRPreferences.fields.budget.label')}
                  </Text>
                  {error && <Text color="danger">{error.message}</Text>}
                </div>
                <DropdownTrigger>
                  <span className={st.placeholder}>
                    {field.value
                      ? field.value
                      : t('careerAndHRPreferences.fields.budget.placeholder')}
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
        <Controller
          name="goals"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextArea
              label={t('careerAndHRPreferences.fields.goals.label')}
              placeholder={t('careerAndHRPreferences.fields.goals.placeholder')}
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
              {...field}
            />
          )}
        />
        <section className={st.detailsLayout}>
          <Text size="lg">{t('careerProfile.title')}</Text>
          <Text size="lg" color="neutral">
            {t('careerProfile.text')}
          </Text>
          <Controller
            name="jobRoles"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('careerProfile.fields.jobRoles.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
                hint={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="skills"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('careerProfile.fields.skills.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
                hint={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="industry"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('careerProfile.fields.industry.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
                hint={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="careerInterests"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t(
                  'careerProfile.fields.careerInterests.placeholder',
                )}
                intent={error?.message ? 'danger' : 'primary'}
                hint={error?.message}
                {...field}
              />
            )}
          />
        </section>
        <Controller
          name="projectTimeline"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <div>
              <Dropdown>
                <div className={st.titleLabel}>
                  <Text size="lg">
                    {t('careerProfile.fields.projectTimeline.label')}
                  </Text>
                  {error && <Text color="danger">{error.message}</Text>}
                </div>
                <DropdownTrigger>
                  <span className={st.placeholder}>
                    {field.value
                      ? field.value
                      : t('careerProfile.fields.projectTimeline.placeholder')}
                  </span>
                </DropdownTrigger>
                <DropdownMenu>
                  {timelines.map(item => (
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
        <Controller
          name="contactMethod"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <div>
              <Dropdown>
                <div className={st.titleLabel}>
                  <Text size="lg">
                    {t('careerProfile.fields.contactMethod.label')}
                  </Text>
                  {error && <Text color="danger">{error.message}</Text>}
                </div>
                <DropdownTrigger>
                  <span className={st.placeholder}>
                    {field.value
                      ? field.value
                      : t('careerProfile.fields.contactMethod.placeholder')}
                  </span>
                </DropdownTrigger>
                <DropdownMenu>
                  {contactMethods.map(item => (
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
        <Controller
          name="file"
          control={control}
          render={({ field }) => (
            <div className={st.dropdzone}>
              <Text size="lg">
                {t('careerProfile.fields.file.placeholder')}
              </Text>
              <Dropdzone
                name="file"
                onDrop={field.onChange}
                value={field.value}
              />
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
