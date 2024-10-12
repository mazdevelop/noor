import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { getTranslations } from '../lib/getTranslations';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // Load messages from the database or JSON files
  const messages = await getTranslations(locale);

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}