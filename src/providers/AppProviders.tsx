"use client";
import  React, { ReactNode, useState} from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { RecoilRoot } from 'recoil';

type WrapperProps = {children: ReactNode};

const  AppProviders = ({ children }: WrapperProps) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <RecoilRoot>
      <SessionContextProvider supabaseClient={supabaseClient}  >
          {children}
      </SessionContextProvider>
    </RecoilRoot>
  )
  
}

export default AppProviders;