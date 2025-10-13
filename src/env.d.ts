/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    goatcounter?: {
      count: (event: {
        path?: string;
        title: string;
        event?: boolean;
        [key: string]: any;
      }) => void;
    };
    analytics?: {
      trackEvent: (eventName: string, properties?: Record<string, any>) => void;
      trackDownload: (platform: string, product?: string) => void;
      trackInteraction: (elementName: string, action?: string) => void;
      trackLocaleChange: (fromLocale: string, toLocale: string) => void;
    };
    trackEvent?: (eventName: string, properties?: Record<string, any>) => void;
    trackDownload?: (platform: string, product?: string) => void;
    trackInteraction?: (elementName: string, action?: string) => void;
    trackLocaleChange?: (fromLocale: string, toLocale: string) => void;
  }
}

export {};
