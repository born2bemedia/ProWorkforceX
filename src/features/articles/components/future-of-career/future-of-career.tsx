'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { List } from '@/shared/ui/components/list';
import { Text } from '@/shared/ui/kit/text';

import { ArticleHeader } from '../article-header';
import { ArticleHeading } from '../article-heading';
import { ArticleLayout } from '../article-layout';
import st from './future-of-career.module.scss';

export function FutureOfCareer() {
  const t = useTranslations('resources.futureOfCareer');

  return (
    <ArticleLayout>
      <ArticleHeading
        title={t('heading.title')}
        excerpt={t('heading.excerpt')}
        number={1}
      />
      <Text color="primary" size="lg" weight={300}>
        {t('text1.0')}
        <br />
        <br /> {t('text1.1')} <strong>{t('text1.2')}</strong>
        {t('text1.3')}
      </Text>
      <section>
        <ArticleHeader>{t('header2.title')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.0')} <strong>{t('text2.1')}</strong> {t('text2.2')}{' '}
          <strong>{t('text2.3')}</strong> {t('text2.4')}
          <br />
          <br /> {t('text2.5')} <strong>{t('text2.6')}</strong>
          {t('text2.7')}
        </Text>
        <List
          values={[t('list2.0'), t('list2.1')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <section>
        <ArticleHeader>{t('header3')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          {t('text3.0')} <strong>{t('text3.1')}</strong>
          {t('text3.2')} <br />
          <br /> {t('text3.3')} <strong>{t('text3.4')}</strong> {t('text3.5')}
        </Text>
        <List
          values={[
            'Actionable Tip for Employees: Embrace digital tools for career growth, such as Slack, Zoom, and Trello, to stay connected and manage remote work efficiently. Seek out virtual networking events and online communities to expand your professional network.',
            'Actionable Tip for Employers: Implement remote leadership training and coaching programs to support the growth of remote employees. Ensure all team members, whether remote or in-office, have equal development and career advancement opportunities.',
          ]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <div className={st.imgLayout}>
        <Image
          className={st.img}
          src="/images/resources/future-of-career/1.jpg"
          alt="1"
          height={343}
          width={1000}
        />
      </div>
      <section>
        <ArticleHeader>{t('header4')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          {t('text4.0')} <strong>{t('text4.1')}</strong> {t('text4.2')} <br />
          <br /> {t('text4.3')} <strong>{t('text4.4')}</strong> {t('text4.5')}
        </Text>
        <List
          values={[t('list4.0'), t('list4.1')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <section>
        <ArticleHeader>{t('header5')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          {t('text5.0')} <strong>{t('text5.1')}</strong>
          {t('text5.2')}
          <br />
          <br /> {t('text5.3')} <strong>{t('text5.4')}</strong>
          {t('text5.5')} <strong>{t('text5.6')}</strong> {t('text5.7')}
        </Text>
        <List
          values={[t('list5.0'), t('list5.1')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <div className={st.twoImgLayout}>
        <Image
          className={st.img}
          src="/images/resources/future-of-career/2.jpg"
          alt="2"
          width={1000}
          height={343}
        />
        <Image
          className={st.img}
          src="/images/resources/future-of-career/3.jpg"
          alt="3"
          width={1000}
          height={343}
        />
      </div>
      <section>
        <ArticleHeader>{t('header6')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          {t('text6.0')} <strong>{t('text6.1')}</strong>
          {t('text6.2')} <strong>{t('text6.3')}</strong>
          {t('text6.4')} <strong>{t('text6.5')}</strong>
          {t('text6.6')} <strong>{t('text6.7')}</strong>
          {t('text6.8')}
          <br />
          <br /> {t('text6.9')} <strong>{t('text6.10')}</strong>
          {t('text6.11')} <strong>{t('text6.12')}</strong>
          {t('text6.13')} <strong>{t('text6.14')}</strong>
          {t('text6.15')}
        </Text>
        <List
          values={[t('list6.0'), t('list6.1')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <section>
        <ArticleHeader>{t('header7')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          {t('text7.0')} <strong>{t('text7.1')}</strong> {t('text7.2')}{' '}
          <strong>{t('text7.3')}</strong> {t('text7.4')}
          <br />
          <br /> {t('text7.5')} <strong>{t('text7.6')}</strong> {t('text7.7')}
        </Text>
        <List
          values={[t('list7.0'), t('list7.1')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <footer>
        <ArticleHeader>{t('header8')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          {t('text8.0')} <strong>{t('text8.1')}</strong> {t('text8.2')}
          <br />
          <br /> <strong>{t('text8.3')}</strong>
          {t('text8.4')}
        </Text>
      </footer>
    </ArticleLayout>
  );
}
