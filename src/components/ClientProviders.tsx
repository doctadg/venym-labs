"use client";

import React, { ReactNode } from 'react';
import { LanguageProvider } from '../i18n/LanguageContext';
import { CustomThemeProvider } from '../theme/ThemeProvider';

interface ClientProvidersProps {
  children: ReactNode;
}

const ClientProviders: React.FC<ClientProvidersProps> = ({ children }) => {
  return (
    <CustomThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </CustomThemeProvider>
  );
};

export default ClientProviders;
