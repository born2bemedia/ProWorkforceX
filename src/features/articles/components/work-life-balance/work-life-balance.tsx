'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArticleHeader } from '@/features/articles/components/article-header';
import st from '@/features/articles/components/future-of-career/future-of-career.module.scss';

import { List } from '@/shared/ui/components/list';
import { Text } from '@/shared/ui/kit/text';

import { ArticleHeading } from '../article-heading';
import { ArticleLayout } from '../article-layout';

export function WorkLifeBalance() {
  const t = useTranslations('resources.workLifeBalance');

  return (
    <ArticleLayout>
      <ArticleHeading
        title={t('heading.title')}
        excerpt={t('heading.excerpt')}
        number={4}
      />
      <Text color="primary" size="lg" weight={300}>
        {t('text0.0')} <strong>{t('text0.1')}</strong> {t('text0.2')} <br />
        <br /> {t('text0.3')} <strong>{t('text0.4')}</strong>,{t('text0.5')}
      </Text>
      <section>
        <ArticleHeader>{t('header1')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text1.0')}
        </Text>
        <List
          values={[t('list1.0'), t('list1.1'), t('list1.2'), t('list1.3')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          style={{ marginTop: '16px' }}
          weight={300}
        >
          {t('text1.1')}
        </Text>
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
        <List
          values={[
            t('list2.0'),
            t('list2.1'),
            t('list2.2'),
            t('list2.3'),
            t('list2.4'),
          ]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          style={{ marginTop: '16px' }}
          weight={300}
        >
          {t('text2.1')}
        </Text>
      </section>
      <div className={st.imgLayout}>
        <Image
          className={st.img}
          src="/images/resources/work-life-balance/1.jpg"
          alt="1"
          height={343}
          width={1000}
          unoptimized
        />
      </div>
      <section>
        <ArticleHeader>{t('header3')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={400}
        >
          {t('text3.0')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ margin: '16px 0' }}
          weight={400}
          underline
        >
          {t('text3.1')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text3.2.0')} <strong>{t('text3.2.1')}</strong> {t('text3.2.2')}
        </Text>
        <List
          values={[t('list3.0')]}
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
          {t('text3.3')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text3.4')}
        </Text>
        <List
          values={[t('list3.1')]}
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
          {t('text3.5')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text3.6')}
        </Text>
        <List
          values={[t('list3.2')]}
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
          {t('text3.7')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text3.8')}
        </Text>
        <List
          values={[t('list3.3')]}
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
          {t('text3.9')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text3.10')}
        </Text>
        <List
          values={[t('list3.4')]}
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
          {t('text3.11')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text3.12.0')} <strong>{t('text3.12.1')}</strong> {t('text3.12.2')}
        </Text>
        <List
          values={[t('list3.5')]}
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
          {t('text3.13')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text3.14.0')} <strong>{t('text3.14.1')}</strong> {t('text3.14.2')}
        </Text>
        <List
          values={[t('list3.6')]}
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
          {t('text3.15')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text3.16')}
        </Text>
        <List
          values={[t('list3.7')]}
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
          {t('text3.17')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text3.18')}
        </Text>
        <List
          values={[t('list3.8')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <div className={st.twoImgLayout}>
        <Image
          className={st.img}
          src="/images/resources/work-life-balance/2.jpg"
          alt="2"
          width={1000}
          height={343}
        />
        <Image
          className={st.img}
          src="/images/resources/work-life-balance/3.jpg"
          alt="3"
          width={1000}
          height={343}
        />
      </div>
      <section>
        <ArticleHeader>{t('header4')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
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
      <footer>
        <ArticleHeader>{t('header5')}</ArticleHeader>
        <Text color="primary" size="lg" weight={300}>
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
