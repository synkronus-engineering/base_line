import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FormControlLabel, Switch } from '@mui/material';
import { atom, useRecoilState } from 'recoil';

const toggleDialog = atom({
    key: 'toggleDialogAtom',
    default: {show:false, formValue:null, action:''}
})

const FormDialog = () => {
    const [open, setDialogState] = useRecoilState(toggleDialog);
    const [formValue, setName] = React.useState({task: '', is_complete:false});

  return (
      <Dialog open={open.show} >
        <DialogTitle>Add Todo</DialogTitle>
        <DialogContent>
            <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                noValidate
                autoComplete="off"
            >
            <TextField
                autoFocus
                margin="dense"
                label="Task"
                fullWidth
                variant="standard"
                value={formValue.task}
                onChange={(e) => { setName({...formValue, task:e.target.value})} }
            />
            <FormControlLabel
                value="Is Done"
                control={
                    <Switch
                    checked={formValue.is_complete}
                    onChange={(e) => { setName({...formValue, is_complete:e.target.checked})} }
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Is Done"
                labelPlacement="top"
            />
            </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e)=> { e.preventDefault(); setDialogState({show:false, formValue:null, action:''})}} >Cancel</Button>
          <Button onClick={(e)=> { e.preventDefault(); setDialogState({show:true, formValue:formValue as any, action:'save'})}} >Save</Button>
        </DialogActions>
      </Dialog>
  );
}

export {
    toggleDialog,
    FormDialog
}