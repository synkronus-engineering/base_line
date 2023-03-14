"use client";
import React, { ReactNode, StrictMode }from 'react';
import AppProviders from '@/src/providers/AppProviders';
import { Open_Sans } from "next/font/google";
import RootStyleEmotionRegistry from '@/src/providers/EmotionRootStyle';

const inter = Open_Sans({
  subsets: ["latin"],
  display:'swap',
  weight: ['400', '600','700','800'],
});

type WrapperProps = {children: ReactNode};

const RootLayout = ({children}: WrapperProps) => {
  return (
    <StrictMode>
      <html lang="es" className={inter.className} key="root">
        <head />
      </html>
      <RootStyleEmotionRegistry>
        <html lang="es" className={inter.className} key="root">
          <body>
            <AppProviders>
                  {children}
            </AppProviders>
          </body>
        </html>
      </RootStyleEmotionRegistry>
    </StrictMode>
  )
}

export default RootLayout



