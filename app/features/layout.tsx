"use client"
import {  ReactNode } from 'react';
import SideNav from '@/src/@page-sections/layouts/SideNav';
import { Box, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';


export default function LayoutFeatures({children}:{children:ReactNode}) {


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideNav      />
        <Grid container 
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item sm={12} xs={12} style={{marginTop:'70px'}}>
                {children}
            </Grid>
        </Grid>
    </Box>
  );
};
