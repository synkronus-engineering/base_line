"use client";
import React, { ReactNode }from 'react';
import AppProviders from '@/pages/AppProviders';
import RootStyleEmotionRegistry from '@/pages/EmotionRootStyle';
import { Open_Sans } from "@next/font/google";

const inter = Open_Sans({
  subsets: ["latin"],
  display:'swap',
  weight: ['400', '600','700','800'],
});

type WrapperProps = {children: ReactNode};

const RootLayout = ({children}: WrapperProps) => {
  return (
    <html lang="es" className={inter.className}>
    <head />
      <body>
        <AppProviders>
          <RootStyleEmotionRegistry>
              {children}
          </RootStyleEmotionRegistry>
        </AppProviders>
      </body>
    </html>
  )
}

export default RootLayout



