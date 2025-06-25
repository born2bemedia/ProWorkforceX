'use client';

import type { JSX } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { Switcher } from '@/features/lang-switcher/components/switcher';

import { English, Germany, Italy } from '@/shared/ui/icons/countries';

const langIcons: Record<string, JSX.Element> = {
  en: <English />,
  de: <Germany />,
  it: <Italy />,
};

export function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (value: string) => {
    const segments = pathname.split('/');
    segments[1] = value;
    const newPath = segments.join('/');
    router.replace(newPath);
  };

  return (
    <Switcher
      options={[
        {
          label: (
            <span
              className="notranslate"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <English />
              EN
            </span>
          ),
          value: 'en',
        },
        {
          label: (
            <span
              className="notranslate"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Germany />
              DE
            </span>
          ),
          value: 'de',
        },
        {
          label: (
            <span
              className="notranslate"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Italy />
              IT
            </span>
          ),
          value: 'it',
        },
      ]}
      value={
        <span
          className="notranslate"
          style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
        >
          {langIcons[locale.toLowerCase()]}
          {locale.toUpperCase()}
        </span>
      }
      onChange={switchLanguage}
    />
  );
}
