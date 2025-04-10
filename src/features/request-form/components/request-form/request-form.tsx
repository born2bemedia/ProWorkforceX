'use client';

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
  budgets,
  contactMethods,
  type RequestFormSchema,
  requestFormSchema,
  services,
  timelines,
} from '../../lib';
import { sendRequestForm, useRequestDialogStore } from '../../services';
import { DataChoice } from '../data-choice';
import st from './request-form.module.scss';

export function RequestForm({ className }: { className?: string }) {
  const { setOpen, setSent } = useRequestDialogStore();

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
          Begin Your Journey <br /> with ProWorkforceX
        </Title>
        <Chip variant="secondary">Let’s Shape Your Path to Career Growth</Chip>
        <Text color="primary" size="lg" weight={300}>
          Share your career objectives, obstacles, and aspirations, and we’ll
          design a custom plan to help you succeed. Complete the form below, and
          let’s take the next step toward achieving your career ambitions.
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
            <TextField
              label="Company Name (optional)"
              placeholder="If HR support is related to your role in a company"
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="website"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Your Website (optional)"
              placeholder="If HR support is related to your business or self-employment"
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
              {...field}
            />
          )}
        />
      </section>
      <section className={st.formSection}>
        <Text size="2xl" weight={500}>
          Career & HR Data
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
                      Select the Service You’re Interested In
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
        <Controller
          name="goals"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextArea
              label="Your Goals & Challenges"
              placeholder="What are your key career objectives and current challenges?"
              intent={error?.message ? 'danger' : 'primary'}
              hint={error?.message}
              {...field}
            />
          )}
        />
        <section className={st.detailsLayout}>
          <Text size="lg">Your Career Profile</Text>
          <Text size="lg" color="neutral">
            Tell us about your ideal professional role and work environment:
          </Text>
          <Controller
            name="jobRoles"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder="Job Role(s)"
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
                placeholder="Skills Required"
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
                placeholder="Industry"
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
                placeholder="Career Interests"
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
                  <Text size="lg">Project Timeline</Text>
                  {error && <Text color="danger">{error.message}</Text>}
                </div>
                <DropdownTrigger>
                  <span className={st.placeholder}>
                    {field.value ? field.value : 'When do you plan to start?'}
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
                  <Text size="lg">Preferred Contact Methode</Text>
                  {error && <Text color="danger">{error.message}</Text>}
                </div>
                <DropdownTrigger>
                  <span className={st.placeholder}>
                    {field.value
                      ? field.value
                      : 'How would you like to connect?'}
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
