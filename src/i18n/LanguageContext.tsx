"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from './translations/en.json';
import thMessages from './translations/th.json';

// Define available locales
export type Locale = 'en' | 'th';

// Function to flatten nested messages
const flattenMessages = (nestedMessages: Record<string, any>, prefix = '') => {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    
    return messages;
  }, {} as Record<string, string>);
};

// Define messages by locale
const messages: Record<Locale, Record<string, string>> = {
  en: flattenMessages(enMessages),
  th: flattenMessages(thMessages),
};

// Define language context type
interface LanguageContextType {
  locale: Locale;
  toggleLanguage: () => void;
  setLocale: (locale: Locale) => void;
}

// Create language context
const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  toggleLanguage: () => {},
  setLocale: () => {},
});

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Initialize with browser language or saved preference
  const getInitialLocale = (): Locale => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale');
      if (savedLocale === 'en' || savedLocale === 'th') {
        return savedLocale;
      }
      
      // Check browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'th') {
        return 'th';
      }
    }
    return 'en'; // Default to English
  };
  
  const [locale, setLocale] = useState<Locale>('en'); // Default for SSR
  
  // Set the locale after component mounts (to avoid SSR issues)
  React.useEffect(() => {
    setLocale(getInitialLocale());
  }, []);
  
  // Toggle between English and Thai
  const toggleLanguage = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'en' ? 'th' : 'en';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };
  
  // Context value
  const contextValue: LanguageContextType = {
    locale,
    toggleLanguage,
    setLocale: (newLocale: Locale) => {
      localStorage.setItem('locale', newLocale);
      setLocale(newLocale);
    },
  };
  
  return (
    <LanguageContext.Provider value={contextValue}>
      <IntlProvider locale={locale} messages={messages[locale]} defaultLocale="en">
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
