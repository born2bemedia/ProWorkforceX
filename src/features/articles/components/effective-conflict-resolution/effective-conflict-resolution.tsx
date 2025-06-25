'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { List } from '@/shared/ui/components/list';
import { Text } from '@/shared/ui/kit/text';

import { ArticleHeader } from '../article-header';
import { ArticleHeading } from '../article-heading';
import { ArticleLayout } from '../article-layout';
import st from './effective-conflict-resolution.module.scss';

export function EffectiveConflictResolution() {
  const t = useTranslations('resources.effectiveConflictResolution');

  return (
    <ArticleLayout>
      <ArticleHeading
        title={t('heading.title')}
        excerpt={t('heading.excerpt')}
        number={2}
      />
      <Text color="primary" size="lg" weight={300}>
        {t('text1.0')}
        <br />
        <br /> {t('text1.1')} <strong>{t('text1.2')}</strong>
        {t('text1.3')}
      </Text>
      <section>
        <ArticleHeader>{t('header2')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text2.0')}
          <br />
          <br />
          {t('text2.1')}
        </Text>
        <List
          values={[t('list2.0'), t('list2.1'), t('list2.2'), t('list2.3')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          style={{ margin: '16px 0' }}
          weight={300}
        >
          {t('text2.2')}
        </Text>
        <List
          values={[t('list2.4'), t('list2.5'), t('list2.6')]}
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
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text3.0')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
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
          {t('text3.2')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
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
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
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
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
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
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
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
      </section>
      <div className={st.imgLayout}>
        <Image
          className={st.img}
          src="/images/resources/effective-conflict/1.jpg"
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
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text4.0')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={400}
          underline
        >
          {t('text4.1')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text4.2')}
        </Text>
        <List
          values={[t('list4.0')]}
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
          {t('text4.3')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text4.4')}
        </Text>
        <List
          values={[t('list4.1')]}
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
          {t('text4.5')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text4.6')}
        </Text>
        <List
          values={[t('list4.2')]}
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
          {t('text4.7')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text4.8')}
        </Text>
        <List
          values={[t('list4.3')]}
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
          {t('text4.9')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text4.10')}
        </Text>
        <List
          values={[t('list4.4')]}
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
          {t('text4.11')}
        </Text>
        <Text
          color="primary"
          size="lg"
          style={{ marginBottom: '16px' }}
          weight={300}
        >
          {t('text4.12')}
        </Text>
        <List
          values={[t('list4.5')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
      </section>
      <div className={st.twoImgLayout}>
        <Image
          className={st.img}
          src="/images/resources/effective-conflict/2.jpg"
          alt="2"
          width={1000}
          height={343}
        />
        <Image
          className={st.img}
          src="/images/resources/effective-conflict/3.jpg"
          alt="3"
          width={1000}
          height={343}
        />
      </div>
      <section>
        <ArticleHeader>{t('header5')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          {t('text5.0')}
        </Text>
        <List
          values={[t('list5.0'), t('list5.1'), t('list5.2')]}
          gap={16}
          opacityText={false}
          weight={300}
        />
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginTop: '16px' }}
        >
          {t('text5.1')}
        </Text>
      </section>
      <footer>
        <ArticleHeader>{t('header6')}</ArticleHeader>
        <Text
          color="primary"
          size="lg"
          weight={300}
          style={{ marginBottom: '16px' }}
        >
          {t('text6.0')}
          <br />
          <br /> {t('text6.1')}
          <Link href="/contact-us">
            <strong
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              {t('text6.2')}
            </strong>
          </Link>{' '}
          {t('text6.3')}
        </Text>
      </footer>
    </ArticleLayout>
  );
}
