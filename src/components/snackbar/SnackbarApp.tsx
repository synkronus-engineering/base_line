import { Snackbar } from "@mui/material"
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
            autoHideDuration={2000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
    )
}

export {
    toggleSnackBar,
    SnackbarApp
}