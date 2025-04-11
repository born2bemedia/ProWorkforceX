'use client';

import type { JSX } from 'react';

import { Switcher } from '@/features/lang-switcher/components/switcher';

import { English, Germany, Italy } from '@/shared/ui/icons/countries';

import { useLanguageSwitcher } from '../../lib';

const langIcons: Record<string, JSX.Element> = {
  en: <English />,
  de: <Germany />,
  it: <Italy />,
};

export function LangSwitcher() {
  const { currentLanguage, switchLanguage, languageConfig } =
    useLanguageSwitcher();

  if (!languageConfig) {
    return null;
  }

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
          {langIcons[currentLanguage.toLowerCase()]}
          {currentLanguage.toUpperCase()}
        </span>
      }
      onChange={switchLanguage}
    />
  );
}
