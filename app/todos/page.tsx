"use client"
import * as React from 'react';
import { Box, Grid, Container } from '@mui/material';
import TodoList from '@/src/@page-sections/todos/TodoList';
import TodoStats from '@/src/@page-sections/todos/TodoStats';

const Todos = async () => {

  return (
    <Container maxWidth="md" sx={{mt: 20}}>
      <Box style={{ height: 400, width: '100%' }}>
        <Grid container 
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item sm={6} xs={12}>
            <TodoList />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TodoStats />
          </Grid>
        </Grid>      
      </Box>     
    </Container>
  )
}

export default Todos