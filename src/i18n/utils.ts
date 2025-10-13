import type { Locale, TranslationKeys } from './ui';

// Helper function to get locale from URL
export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  const supportedLocales: Locale[] = ['en', 'de', 'ru', 'zh', 'fr', 'es', 'ja'];
  
  if (supportedLocales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  
  return 'en'; // Default to English
}

// Helper function to get translations for a specific locale
export async function getTranslations(locale: Locale): Promise<TranslationKeys> {
  try {
    const translations = await import(`./locales/${locale}.json`);
    return translations.default;
  } catch (error) {
    console.warn(`Failed to load translations for locale ${locale}, falling back to English`);
    const fallback = await import('./locales/en.json');
    return fallback.default;
  }
}

// Helper function to get localized path
export function getLocalizedPath(pathname: string, locale: Locale): string {
  // Remove existing locale prefix if present
  const segments = pathname.split('/').filter(Boolean);
  const supportedLocales: Locale[] = ['en', 'de', 'ru', 'zh', 'fr', 'es', 'ja'];
  
  if (supportedLocales.includes(segments[0] as Locale)) {
    segments.shift();
  }
  
  // For English, return path without locale prefix
  if (locale === 'en') {
    return segments.length > 0 ? '/' + segments.join('/') : '/';
  }
  
  return `/${locale}${segments.length > 0 ? '/' + segments.join('/') : ''}`;
}

// Helper function to get all available locales
export function getAvailableLocales(): Locale[] {
  return ['en', 'de', 'ru', 'zh', 'fr', 'es', 'ja'];
}

// Helper function to get locale display name
export function getLocaleDisplayName(locale: Locale): string {
  const displayNames: Record<Locale, string> = {
    en: 'English',
    de: 'Deutsch',
    ru: 'Русский',
    zh: '中文',
    fr: 'Français',
    es: 'Español',
    ja: '日本語',
  };
  
  return displayNames[locale];
}

// Helper function to get locale native name
export function getLocaleNativeName(locale: Locale): string {
  const nativeNames: Record<Locale, string> = {
    en: 'English',
    de: 'Deutsch',
    ru: 'Русский',
    zh: '中文',
    fr: 'Français',
    es: 'Español',
    ja: '日本語',
  };
  
  return nativeNames[locale];
}

// Helper function to get English name for locale
export function getLocaleEnglishName(locale: Locale): string {
  const englishNames: Record<Locale, string> = {
    en: 'English',
    de: 'German',
    ru: 'Russian',
    zh: 'Chinese',
    fr: 'French',
    es: 'Spanish',
    ja: 'Japanese',
  };
  
  return englishNames[locale];
}
