'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArticleHeader } from '@/features/articles/components/article-header';

import { List } from '@/shared/ui/components/list';
import { Text } from '@/shared/ui/kit/text';

import { ArticleHeading } from '../article-heading';
import { ArticleLayout } from '../article-layout';
import st from './navigating-employee-benefits.module.scss';

export function NavigatingEmployeeBenefits() {
  const t = useTranslations('resources.navigatingEmployeeBenefits');

  return (
    <ArticleLayout>
      <ArticleHeading
        title={t('heading.title')}
        excerpt={t('heading.excerpt')}
        number={3}
      />
      <Text color="primary" size="lg" weight={300}>
        {t('text0.0')}
        <br />
        <br /> {t('text0.1')}
      </Text>
      <section>
        <ArticleHeader>{t('header1')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text1')}
        </Text>
        <List
          values={[
            t('list1.0'),
            t('list1.1'),
            t('list1.2'),
            t('list1.3'),
            t('list1.4'),
          ]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <section>
        <ArticleHeader>{t('header2')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.0')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ margin: '16px 0' }}
          weight={400}
          underline
        >
          {t('text2.1')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.2')}
        </Text>
        <List
          values={[t('list2.0')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          style={{ margin: '16px 0' }}
          weight={400}
          underline
        >
          {t('text2.3')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.4')}
        </Text>
        <List
          values={[t('list2.1')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          style={{ margin: '16px 0' }}
          weight={400}
          underline
        >
          {t('text2.5')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.6')}
        </Text>
        <List
          values={[t('list2.2')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          style={{ margin: '16px 0' }}
          weight={400}
          underline
        >
          {t('text2.7')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.8')}
        </Text>
        <List
          values={[t('list2.3')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          style={{ margin: '16px 0' }}
          weight={400}
          underline
        >
          {t('text2.9')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.10')}
        </Text>
        <List
          values={[t('list2.4')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          style={{ margin: '16px 0' }}
          weight={400}
          underline
        >
          {t('text2.11')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.12')}
        </Text>
        <List
          values={[t('list2.5')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          style={{ margin: '16px 0' }}
          weight={400}
          underline
        >
          {t('text2.13')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.14')}
        </Text>
        <List
          values={[t('list2.6')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          style={{ margin: '16px 0' }}
          weight={400}
          underline
        >
          {t('text2.15')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.16')}
        </Text>
        <List
          values={[t('list2.7')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          style={{ margin: '16px 0' }}
          weight={400}
          underline
        >
          {t('text2.17')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.18')}
        </Text>
        <List
          values={[t('list2.8')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          style={{ margin: '16px 0' }}
          weight={400}
          underline
        >
          {t('text2.19')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.20')}
        </Text>
        <List
          values={[t('list2.9')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <div className={st.imgLayout}>
        <Image
          className={st.img}
          src="/images/resources/navigating-employee/1.jpg"
          alt="1"
          height={343}
          width={1000}
        />
      </div>
      <section>
        <ArticleHeader>{t('header3')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          {t('text3.0')}
        </Text>
        <List
          values={[t('list3.0'), t('list3.1'), t('list3.2'), t('list3.3')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <section>
        <ArticleHeader>{t('header4')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          {t('text4.0')}
        </Text>
        <List
          values={[t('list4.0')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <div className={st.twoImgLayout}>
        <Image
          className={st.img}
          src="/images/resources/navigating-employee/2.jpg"
          alt="2"
          width={1000}
          height={343}
        />
        <Image
          className={st.img}
          src="/images/resources/navigating-employee/3.jpg"
          alt="3"
          width={1000}
          height={343}
        />
      </div>
      <footer>
        <ArticleHeader>{t('header5')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          {t('text5.0')}
          <br />
          <br />
          {t('text5.1')} <strong>{t('text5.2')}</strong>, {t('text5.3')}
          <br />
          <br />
          {t('text5.4')}
          <Link href="/contact-us">
            <strong
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              {t('text5.5')}
            </strong>
          </Link>{' '}
          {t('text5.6')}
        </Text>
      </footer>
    </ArticleLayout>
  );
}
