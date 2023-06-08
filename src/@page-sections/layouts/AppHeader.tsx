"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useSupabaseApp } from '@/src/providers/SupabaseProvider';
import { userGlobalSession } from '@/src/context/appContext';
import { has } from 'lodash';
import { useRecoilValue } from 'recoil';
import { Button } from '@mui/material';
import HasMounted from '@/src/lib/HasMounted';

const rightLink = {
  fontSize: 10,
  color: 'common.white',
  ml: 3,
};

const AppHeader = () => {
  const { supabase } = useSupabaseApp();
  const router = useRouter();
  const userGlobal = useRecoilValue(userGlobalSession);

  const handleSession = async () => {
    if (userGlobal && has(userGlobal, 'user')) {
     await  supabase.auth.signOut().then(() => router.push('/'));
    } else {
      router.push("/login")
    }     
  }

  return (
    <AppBar position="fixed" color="transparent"
      sx = {{
        backgroundColor: '#fff',
        boxShadow: '0px 0px 15px 0px rgb(0 0 0 / 10%)',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters
          sx = {{minHeight: {xs: 80},}}
        >
          <Stack direction="row" spacing={2}>
            <Link href="/" > {'Home'} </Link>
            <Link href="/todos" > {'ToDos'} </Link>
            <Link href="/features" > {'New Features'} </Link>
          </Stack>
          <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: 'flex'}} data-testid="menu">
              <Button
                sx={{ 
                  display: 'block', 
                  pl: 2, 
                  pr: 2,
                  textTransform: 'none',
                  fontSize: '1.12rem',
                }}
                onClick={() => handleSession()}
              >
                <HasMounted fallback={'Sign In'}>
                  {(userGlobal && has(userGlobal, 'user')) ? 'Sign Out' : 'Sign In'}
                </HasMounted>
              </Button>
          </Box>
        </Toolbar>   
      </Container>
    </AppBar>
  );
};
export default AppHeader;
