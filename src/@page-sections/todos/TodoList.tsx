"use client"
import useRequestRest from '@/src/@page-sections/todos/useRequestRest';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Box, Card, CardContent, CardHeader, Grid } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { map, orderBy } from 'lodash';
import { FormDialog } from '@/src/@page-sections/todos/FormDialog';
import { ConfirmDialog } from '@/src/components/dialog/ConfirmDialog';

const TodoList = () => {
  const { data: todos, setDialogState, handleAction } = useRequestRest();

  return (
    <>
      <Card sx={{ minWidth: '100%', minHeight:'400px' }}>
        <CardHeader 
          action={
              <IconButton aria-label="addNew" onClick={(e) => {e.preventDefault(); setDialogState({show:true, formValue:null, action:''}) } } >
                <AddCircleOutlineIcon />
              </IconButton>
          }
          title="Todo List" 
        />
        <CardContent sx={{ height:'330px', overflow:'scroll' }}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {map(orderBy(todos?.data, 'inserted_at', 'desc'), (item) => {
              const labelId = `checkbox-list-label-${item.id}`;
              return (
                <ListItem
                  key={item.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleAction(item, 'delete')}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton role={undefined}  dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={item.is_complete}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onClick={() => handleAction(item, 'is_done')}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${item.task}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
      <FormDialog />      
      <ConfirmDialog />    
    </>
  )
}

export default TodoList
