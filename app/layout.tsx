"use client"
import React, { ReactNode, StrictMode }from 'react';
import AppProviders from '@/src/providers/AppProviders';
import { Open_Sans } from "next/font/google";
import RootStyleEmotionRegistry from '@/src/providers/EmotionRootStyle';
import { createSupaClientComponent } from '@/src/lib/supabase';
import SupabaseListener from '@/src/providers/SupabaseListener';
import SupabaseProvider from '@/src/providers/SupabaseProvider';
import AppHeader from '@/src/@page-sections/layouts/AppHeader';

const inter = Open_Sans({
  subsets: ["latin"],
  display:'swap',
  weight: ['400', '600','700','800'],
});

type WrapperProps = {children: ReactNode};

const RootLayout = async ({children}: WrapperProps) => {
  const supabase = createSupaClientComponent();
  const { data: { session },   } = await supabase.auth.getSession();

  return (
      <html lang="es" className={inter.className} key="root">
        <head />
        <body>
        <RootStyleEmotionRegistry key="theme-provider">
          <AppProviders>
            <SupabaseProvider session={session}>
            <SupabaseListener />  
              <AppHeader/>
              {children}
            </SupabaseProvider>
          </AppProviders>
        </RootStyleEmotionRegistry>
        </body>
      </html>
  )
}

export default RootLayout



