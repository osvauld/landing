// Translation interface definitions
export interface TranslationKeys {
  // Navigation
  nav: {
    github: string;
    documentation: string;
    faq: string;
    story: string;
    visitOsvauld: string;
    tryLivnote: string;
  };
  
  // Footer
  footer: {
    heading: {
      osvauld: string;
      livnote: string;
    };
    terms: string;
    privacy: string;
    copyright: string;
  };
  
  // Osvauld Hero
  osvauldHero: {
    title: string;
    subtitle: string;
  };
  
  // Features
  features: {
    title: string;
    peerToPeer: {
      title: string;
      description: string;
    };
    trustedAccess: {
      title: string;
      description: string;
    };
    offlineFirst: {
      title: string;
      description: string;
    };
    selfSovereign: {
      title: string;
      description: string;
    };
    openSource: {
      title: string;
      description: string;
    };
    sovereignNode: {
      title: string;
      description: string;
    };
  };
  
  // Livnote Hero
  livnoteHero: {
    title: string;
    subtitle: string;
    description: string;
  };
  
  // Collaborative Editor
  collaborativeEditor: {
    title: string;
    subtitle: string;
    exploreButton: string;
  };
  
  // Meta tags
  meta: {
    osvauld: {
      title: string;
      description: string;
    };
    livnote: {
      title: string;
      description: string;
    };
  };
  
  // Common UI elements
  common: {
    loading: string;
    error: string;
    retry: string;
  };
}

export type Locale = 'en' | 'de' | 'ru' | 'zh' | 'fr' | 'es' | 'ja';

export interface Translations {
  [key: string]: TranslationKeys;
}
