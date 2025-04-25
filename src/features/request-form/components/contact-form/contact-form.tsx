'use client';

import { useState } from 'react';

import { DataOption } from '@/features/request-form/components/data-option';
import { SuccessDialog } from '@/features/request-form/components/success-dialog';
import type { RequestFormSchema } from '@/features/request-form/lib';
import {
  budgets,
  contactMethods,
  requestFormSchema,
  timelines,
} from '@/features/request-form/lib';
import { sendRequestForm } from '@/features/request-form/services';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { notifyError } from '@/shared/lib/toast';
import { Dropdzone } from '@/shared/ui/components/dropzone';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { services } from '../../lib';
import st from './contact-form.module.scss';

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(true);

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
      setIsSuccess(true);
    } catch (e) {
      console.error('Error sending form:', e);
      notifyError('Failed to send the form. Please try again later.');
    }
  });

  return (
    <form id="contact-form" className={st.form} onSubmit={onSubmit}>
      <SuccessDialog isOpen={isSuccess} setOpen={setIsSuccess} />
      <section className={st.innerFormLayout}>
        <Title level={5}>Personal & Company Data</Title>
        <section>
          <div className={st.formRow}>
            <Controller
              name="fullName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label="Full Name"
                  placeholder="Enter your full name"
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
                  label="Email Address"
                  placeholder="Enter your email address"
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
                <TextField
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  intent={error?.message ? 'danger' : 'primary'}
                  hint={error?.message}
                  color="white"
                  rounded="sm"
                  {...field}
                />
              )}
            />
            <Controller
              name="companyName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label="Company Name (optional)"
                  placeholder="Required if your company seeks HR support for managing your workforce or business operations."
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
                label="Your Website (optional)"
                placeholder="Please provide your company's website if you feel it's relevant to understanding your business needs or HR requirements."
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
        <Title level={5}>Career & HR Preferences</Title>
        <section className={st.servicesLayout}>
          <Controller
            name="services"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <div className={st.labelOptions}>
                  <Text size="lg">Select the Service You’re Interested In</Text>
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
                  <Text size="lg">Select your preferred investment range:</Text>
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
                  Your Goals & Challenges:
                </Text>
                <TextField
                  label="What are your key business objectives and HR challenges?"
                  placeholder="Type here..."
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
              Tell us about your ideal workforce and organizational needs:
            </Text>
            <div className={st.formRow}>
              <Controller
                name="jobRoles"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    label="Job Role(s): "
                    placeholder="Type here..."
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
                    label="Skills Required: "
                    placeholder="Type here..."
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
                    label="Industry:"
                    placeholder="Type here..."
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
                    label="Company Interests:"
                    placeholder="Type here..."
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
                    When would you like to start implementing these HR
                    solutions?
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
                    How would you like to connect?
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
                <Text size="lg">Upload Any Relevant Files (optional)</Text>
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
      <Button className={st.sendBtn} variant="primaryInverted">
        {isSubmitting ? 'Sending...' : 'Submit Your Request'}
        <ArrowTopRight />
      </Button>
    </form>
  );
}
