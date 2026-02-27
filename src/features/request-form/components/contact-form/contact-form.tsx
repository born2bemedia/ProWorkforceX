'use client';

import { useState } from 'react';
import ReCaptcha from 'react-google-recaptcha';
import { useTranslations } from 'next-intl';

import { DataOption } from '@/features/request-form/components/data-option';
import { SuccessDialog } from '@/features/request-form/components/success-dialog';
import type { RequestFormSchema } from '@/features/request-form/lib';
import { sendRequestForm } from '@/features/request-form/services';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { notifyError } from '@/shared/lib/toast';
import { Dropdzone } from '@/shared/ui/components/dropzone';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import {
  createRequestFormSchema,
  getBudgets,
  getContactMethods,
  getServices,
  getTimelines,
} from '../../lib';
import st from './contact-form.module.scss';

export function ContactForm() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const t = useTranslations('contactForm');
  const te = useTranslations('contactForm.errors');
  const ts = useTranslations('services');
  const tb = useTranslations('budgets');
  const tt = useTranslations('timelines');
  const tc = useTranslations('contactMethods');

  const requestFormSchema = createRequestFormSchema(te);

  const services = getServices(ts);
  const budgets = getBudgets(tb);
  const timelines = getTimelines(tt);
  const contactMethods = getContactMethods(tc);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
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
      setIsSuccess(true);
      reset();
    } catch (e) {
      console.error('Error sending form:', e);
      notifyError('Failed to send the form. Please try again later.');
    }
  });

  const onCaptchaVerify = (token: string | null) => {
    setIsCaptchaVerified(!!token);
  };

  return (
    <form id="contact-form" className={st.form} onSubmit={onSubmit}>
      <SuccessDialog isOpen={isSuccess} setOpen={setIsSuccess} />
      <section className={st.innerFormLayout}>
        <Title level={5}>{t('personalData.title')}</Title>
        <section>
          <div className={st.formRow}>
            <Controller
              name="fullName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label={t('personalData.fields.fullName.label')}
                  placeholder={t('personalData.fields.fullName.placeholder')}
                  intent={error?.message ? 'danger' : 'primary'}
                  hint={error?.message}
                  color="white"
                  rounded="sm"
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
                  color="white"
                  rounded="sm"
                  {...field}
                />
              )}
            />
          </div>
          <div className={st.formRow}>
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <PhoneField
                  label={t('personalData.fields.phone.label')}
                  placeholder={t('personalData.fields.phone.placeholder')}
                  hint={error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="companyName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label={t('personalData.fields.companyName.label')}
                  placeholder={t('personalData.fields.companyName.placeholder')}
                  intent={error?.message ? 'danger' : 'primary'}
                  hint={error?.message}
                  height={72}
                  color="white"
                  rounded="sm"
                  {...field}
                />
              )}
            />
          </div>
          <Controller
            name="website"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label={t('personalData.fields.website.label')}
                placeholder={t('personalData.fields.website.placeholder')}
                intent={error?.message ? 'danger' : 'primary'}
                hint={error?.message}
                height={72}
                color="white"
                rounded="sm"
                {...field}
              />
            )}
          />
        </section>
      </section>
      <section className={st.innerFormLayout}>
        <Title level={5}>{t('careerAndHRPreferences.title')}</Title>
        <section className={st.servicesLayout}>
          <Controller
            name="services"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <div className={st.labelOptions}>
                  <Text size="lg">
                    {t('careerAndHRPreferences.fields.services.label')}
                  </Text>
                  {error && <Text color="danger">{error.message}</Text>}
                </div>
                <section className={st.grid}>
                  {services.map(item => (
                    <DataOption key={item}>
                      <Checkbox
                        checked={field.value.includes(item)}
                        onCheckedChange={() => {
                          const updatedServices = field.value.includes(item)
                            ? field.value.filter(v => v !== item)
                            : [...field.value, item];
                          field.onChange(updatedServices);
                        }}
                        label={item}
                      />
                    </DataOption>
                  ))}
                </section>
              </div>
            )}
          />
          <Controller
            name="budget"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <div className={st.labelOptions}>
                  <Text size="lg">
                    {t('careerAndHRPreferences.fields.budget.label')}
                  </Text>
                  {error && <Text color="danger">{error.message}</Text>}
                </div>
                <section className={st.grid}>
                  {budgets.map(item => (
                    <DataOption key={item}>
                      <Checkbox
                        checked={field.value.includes(item)}
                        onCheckedChange={() => field.onChange(item)}
                        label={item}
                      />
                    </DataOption>
                  ))}
                </section>
              </div>
            )}
          />
          <Controller
            name="goals"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className={st.goalsLayout}>
                <Text size="lg" color="primary">
                  {t('careerAndHRPreferences.fields.goals.title')}
                </Text>
                <TextField
                  label={t('careerAndHRPreferences.fields.goals.label')}
                  placeholder={t(
                    'careerAndHRPreferences.fields.goals.placeholder',
                  )}
                  intent={error?.message ? 'danger' : 'primary'}
                  hint={error?.message}
                  color="white"
                  rounded="sm"
                  {...field}
                />
              </div>
            )}
          />
          <section className={st.goalsLayout}>
            <Text size="lg" color="primary">
              {t('careerAndHRPreferences.fields.jobRoles.title')}
            </Text>
            <div className={st.formRow}>
              <Controller
                name="jobRoles"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    label={t('careerAndHRPreferences.fields.jobRoles.label')}
                    placeholder={t(
                      'careerAndHRPreferences.fields.jobRoles.placeholder',
                    )}
                    intent={error?.message ? 'danger' : 'primary'}
                    hint={error?.message}
                    color="white"
                    rounded="sm"
                    {...field}
                  />
                )}
              />
              <Controller
                name="skills"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    label={t('careerAndHRPreferences.fields.skills.label')}
                    placeholder={t(
                      'careerAndHRPreferences.fields.skills.placeholder',
                    )}
                    intent={error?.message ? 'danger' : 'primary'}
                    hint={error?.message}
                    color="white"
                    rounded="sm"
                    {...field}
                  />
                )}
              />
            </div>
            <div className={st.formRow}>
              <Controller
                name="industry"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    label={t('careerAndHRPreferences.fields.industry.label')}
                    placeholder={t(
                      'careerAndHRPreferences.fields.industry.placeholder',
                    )}
                    intent={error?.message ? 'danger' : 'primary'}
                    hint={error?.message}
                    color="white"
                    rounded="sm"
                    {...field}
                  />
                )}
              />
              <Controller
                name="careerInterests"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    label={t(
                      'careerAndHRPreferences.fields.careerInterests.label',
                    )}
                    placeholder={t(
                      'careerAndHRPreferences.fields.careerInterests.placeholder',
                    )}
                    intent={error?.message ? 'danger' : 'primary'}
                    hint={error?.message}
                    color="white"
                    rounded="sm"
                    {...field}
                  />
                )}
              />
            </div>
          </section>
          <Controller
            name="projectTimeline"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <section>
                <div className={st.labelOptions}>
                  <Text size="lg" color="primary">
                    {t('careerAndHRPreferences.fields.projectTimeline.label')}
                  </Text>
                  {error && <Text color="danger">{error.message}</Text>}
                </div>
                <div className={st.rowLine}>
                  {timelines.map(item => (
                    <DataOption key={item}>
                      <Checkbox
                        checked={field.value.includes(item)}
                        onCheckedChange={() => field.onChange(item)}
                        label={item}
                      />
                    </DataOption>
                  ))}
                </div>
              </section>
            )}
          />
          <Controller
            name="contactMethod"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <section>
                <div className={st.labelOptions}>
                  <Text size="lg" color="primary">
                    {t('careerAndHRPreferences.fields.contactMethod.label')}
                  </Text>
                  {error && <Text color="danger">{error.message}</Text>}
                </div>
                <div className={st.rowLine}>
                  {contactMethods.map(item => (
                    <DataOption key={item}>
                      <Checkbox
                        checked={field.value.includes(item)}
                        onCheckedChange={() => field.onChange(item)}
                        label={item}
                      />
                    </DataOption>
                  ))}
                </div>
              </section>
            )}
          />
          <Controller
            name="file"
            control={control}
            render={({ field }) => (
              <div className={st.dropdzone}>
                <Text size="lg">
                  {t('careerAndHRPreferences.fields.file.label')}
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
      </section>
      <div className={st.buttonLayout}>
        <Button
          className={st.sendBtn}
          variant="primaryInverted"
          disabled={!isCaptchaVerified || isSubmitting}
        >
          {isSubmitting ? t('sending') : t('submit')}
          <ArrowTopRight />
        </Button>
        <ReCaptcha
          className={st.captcha}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
          onChange={onCaptchaVerify}
        />
      </div>
    </form>
  );
}
