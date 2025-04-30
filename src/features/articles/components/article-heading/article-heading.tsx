'use client';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './article-heading.module.scss';

export function ArticleHeading({
  excerpt,
  title,
  number,
}: {
  title: string;
  excerpt: string;
  number: 1 | 2 | 3 | 4;
}) {
  return (
    <div className={st.layout}>
      <Title level={2} className={cn(st.title, st[`num${number}`])}>
        {title}
      </Title>
      <Text color="primary" size="lg">
        {excerpt}
      </Text>
    </div>
  );
}
