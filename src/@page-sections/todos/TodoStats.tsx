import React from 'react';
import { Box, Card, CardContent, CardHeader, Grid } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { getTodoStats } from '@/src/data/todos_api';

const TodoStats = () => {
  const stats = useRecoilValue(getTodoStats);
  
  return (
      <Card sx={{ minWidth: '100%', minHeight:'400px' }}>
        <CardHeader title="Stats" />
        <CardContent sx={{ height:'330px', overflow:'scroll' }}>
        <Grid container spacing={2} sx={{p: "0rem 1rem 1rem", mt:'10px', ml:'-10px', backgroundColor: '#fff'}}>
          <Grid item sm={6} xs={12} >
            <Box component="small" color="grey.600" mb={0.5} textAlign="left"> Total Todos </Box><br/>
            <span>{ stats.numTodos }</span>
          </Grid>
          <Grid item sm={6} xs={12} >
            <Box component="small" color="grey.600" mb={0.5} textAlign="left"> Completed </Box><br/>
            <span>{ stats.completed }</span>
          </Grid>
        </Grid>
        </CardContent>
      </Card>
  )
}

export default TodoStats
