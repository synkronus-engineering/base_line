"use client";
import React, { ReactNode }from 'react';
import Container from '@mui/material/Container';
import Header from '@/src/components/header'
import { FormDialog } from '@/src/@pages-sections/todos/FormDialog';
import { SnackbarApp } from '@/src/components/snackbar/SnackbarApp';
import { ConfirmDialog } from '@/src/components/dialog/ConfirmDialog';
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation';

type WrapperProps = {children: ReactNode};

const ToDosLayout = ({children}: WrapperProps) => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const menus =  [
      {
        title: 'Logout',
        clickHandle: () => supabaseClient.auth.signOut().then(() => router.push('/')),
      }
  ];

  return (
      <>
        <Header menus={menus}/>
        <FormDialog />      
        <ConfirmDialog />      
        <SnackbarApp />
        <Container maxWidth="md" sx={{mt: 20}}>
          {children}
        </Container>
      </>
  )
}

export default ToDosLayout



