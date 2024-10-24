'use client';

import { useState, useEffect, ReactNode } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Preloader from '../../components/Preloader';
import './globals.css';
import 'remixicon/fonts/remixicon.css';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="fa" dir="rtl">
      <body className="flex flex-col min-h-screen bg-secondary-200 font-vazir">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Navbar />
            <main className="container mx-auto py-8 flex-grow">
              {children}
            </main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}