import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { atom, useRecoilState } from 'recoil';
import { get } from 'lodash';

const toggleConfirmDialog = atom({
    key: 'toggleConfirmDialogAtom',
    default: {show:false, action:false, data:null}
})

const ConfirmDialog = () => {
    const [confirmData, setDialogState] = useRecoilState(toggleConfirmDialog);

  return (
      <Dialog open={confirmData.show} maxWidth='xs' fullWidth>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
            Item: {`${get(confirmData,'data,task', '')}`}
        </DialogContent>
        <DialogActions>
          <Button onClick={(e)=> { e.preventDefault(); setDialogState({show:false, action: false, data:null})}} >Cancel</Button>
          <Button onClick={(e)=> { e.preventDefault(); setDialogState({...confirmData, action: true})}} >Delete</Button>
        </DialogActions>
      </Dialog>
  );
}

export {
    toggleConfirmDialog,
    ConfirmDialog
}