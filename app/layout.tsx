"use client"
import React, { ReactNode, StrictMode }from 'react';
import AppProviders from '@/src/providers/AppProviders';
import { Open_Sans } from "next/font/google";
import RootStyleEmotionRegistry from '@/src/providers/EmotionRootStyle';
import Header from '@/src/components/header'
import AppFooter from '@/src/components/footer'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation';

const inter = Open_Sans({
  subsets: ["latin"],
  display:'swap',
  weight: ['400', '600','700','800'],
});

type WrapperProps = {children: ReactNode};

const RootLayout = ({children}: WrapperProps) => {

  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const menus =  [
      {
        title: 'Logout',
        clickHandle: () => supabaseClient.auth.signOut().then(() => router.push('/')),
      }
  ];

  return (
    <StrictMode>
      <html lang="es" className={inter.className} key="root">
        <head />
      </html>
      <RootStyleEmotionRegistry key="theme-provider">
        <html lang="es" className={inter.className} key="root">
          <head />
          <body>
            <AppProviders>
              <Header menus={menus}/>
                {children}
              {/* <AppFooter /> */}
            </AppProviders>
          </body>
        </html>
      </RootStyleEmotionRegistry>
    </StrictMode>
  )
}

export default RootLayout



