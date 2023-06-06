import Snackbar from '@mui/material/Snackbar';
import { atom, useRecoilState } from "recoil"

const toggleSnackBar = atom({
    key: 'toggleSnackBarAtom',
    default: {show:false, msg:''}
})

const  SnackbarApp = ()  => {
    const [snackbarState, setSnackbarState] = useRecoilState(toggleSnackBar);
    
    return (
        <Snackbar
            message={snackbarState.msg}
            open={snackbarState.show}
            onClose={() => setSnackbarState({show:false, msg:''})}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
    )
}

export {
    toggleSnackBar,
    SnackbarApp
}