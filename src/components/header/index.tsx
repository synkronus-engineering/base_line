"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import MenuType from '@/src/data/types/MenuType';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';


const rightLink = {
  fontSize: 12,
  color: 'common.white',
  ml: 3,
};

type HeaderProps = {menus?: Array<MenuType>};

const Header = ({menus = []}: HeaderProps) => {
  return (
    <AppBar position="fixed" color="transparent"
      sx = {{
        backgroundColor: '#fff',
        boxShadow: '0px 0px 15px 0px rgb(0 0 0 / 10%)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters
          sx = {{
            minHeight: {xs: 80},
          }}
        >
          <Stack direction="row" spacing={2}>
          <Link
              color="main"
              variant="h6"
              underline="none"
              href="/"
              sx={{...rightLink, color: 'main' }}
            >
              {'Home'}
            </Link>
            <Link
              color="main"
              variant="h6"
              underline="none"
              href="/todos"
              sx={{...rightLink, color: 'main' }}
            >
              {'ToDo'}
            </Link>
          </Stack>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="main"
              variant="h6"
              underline="none"
              href="/login"
              sx={{...rightLink, color: 'main' }}
            >
              {'Sign In'}
            </Link>
            {/* <Link
              variant="h6"
              underline="none"
              href="/logout"
              sx={{ ...rightLink, color: 'main' }}
            >
              {'Sign Up'}
            </Link> */}
          </Box>

          {/* <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: 'flex'}} data-testid="menu">
            {menus.map((menu, index) => (
              <Button
                key={index}
                sx={{ 
                  display: 'block', 
                  pl: 2, 
                  pr: 2,
                  textTransform: 'none',
                  fontSize: '1.12rem',
                }}
                onClick={menu.clickHandle}
              >
                {menu.title}
              </Button>
            ))}
          </Box> */}
        </Toolbar>        
      </Container>
    </AppBar>
  );
};
export default Header;
