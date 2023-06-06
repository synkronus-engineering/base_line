import { useEffect } from "react";
import { useTodoListData, todoMutations, todoData } from "@/src/data/todos_api";
import { toggleDialog } from '@/src/@page-sections/todos/FormDialog';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { toggleSnackBar } from '@/src/components/snackbar/SnackbarApp';
import { toggleConfirmDialog } from "@/src/components/dialog/ConfirmDialog";
import { REST_VERBS } from "@/src/lib/res_definitions";
import { get } from "lodash";


function useRequestRest() {
  const {data, isLoading, isError}  = useTodoListData();
  const [confirmDialogState, setConfirmDialogState] = useRecoilState(toggleConfirmDialog);
  const [dialogState, setDialogState] = useRecoilState(toggleDialog);
  const setSnackbarState = useSetRecoilState(toggleSnackBar);
  const setTodoListDt = useSetRecoilState(todoData);

  const handleAction = async (item:any, action:string) => {
    
    switch (action) {
      case 'delete':
          setConfirmDialogState({show:true, action: false, data:item});
        break;
      case 'confirm_delete':
          const {data:dtDeleteTodo, error:errDeleteTodo} = await todoMutations(REST_VERBS.DELETE, {id: item.id });
          if(dtDeleteTodo && !errDeleteTodo) {
            setConfirmDialogState({show:false, action: false, data:null})
            setSnackbarState({show:true, msg:'Success'})
          }
        break;
      case 'is_done':
          const {data:dtIsDoneTodo, error:errIsDoneTodo} = await todoMutations(REST_VERBS.PUT, {is_complete: !item.is_complete, id: item.id });
          if(dtIsDoneTodo && !errIsDoneTodo) {
            setSnackbarState({show:true, msg:'Success'})
          }
        break;
      case 'save':
          const {data:dtCompleteTodo, error:errCompleteTodo} = await todoMutations(REST_VERBS.POST, item);
          if(dtCompleteTodo && !errCompleteTodo) {
            setDialogState({show:false, formValue:null, action:''});
            setSnackbarState({show:true, msg:'Success'})
          }
        break;
    
      default:
        break;
    }
  };

  useEffect(() => {
    (() => {
      if((data?.data || []).length > 0) 
        setTodoListDt(get(data, 'data', []));
    })()
  },[data])

  useEffect(() => {
    (() => {
      if(!!dialogState.formValue && dialogState.action !== '') 
        handleAction(dialogState.formValue, dialogState.action)
    })()
  },[dialogState])

  useEffect(() => {
    (() => {
      if(confirmDialogState.action && confirmDialogState.data) 
        handleAction(confirmDialogState.data, 'confirm_delete')
    })()
  },[confirmDialogState])


  return {
    data,
    setDialogState,
    handleAction,
  };
}

export default useRequestRest;


// import { useEffect, useState } from "react";
// import axios from "axios";

// export const REQUEST_STATUS = {
//   LOADING: "loading",
//   SUCCESS: "success",
//   FAILURE: "failure",
// };

// const restUrl = "api/speakers";

// function useRequestRest() {
//   const [data, setData] = useState([]);
//   const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
//   const [error, setError] = useState("");
//   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//   useEffect(() => {
//     async function delayFunc() {
//       try {
//         const result = await axios.get(restUrl);
//         setRequestStatus(REQUEST_STATUS.SUCCESS);
//         setData(result.data);
//       } catch (e) {
//         setRequestStatus(REQUEST_STATUS.FAILURE);
//         setError(e);
//       }
//     }
//     delayFunc();
//   }, []);

//   function updateRecord(record, doneCallback) {
//     const originalRecords = [...data];
//     const newRecords = data.map(function (rec) {
//       return rec.id === record.id ? record : rec;
//     });
//     async function delayFunction() {
//       try {
//         setData(newRecords);
//         await axios.put(`${restUrl}/${record.id}`, record);
//         if (doneCallback) {
//           doneCallback();
//         }
//       } catch (error) {
//         console.log("error thrown inside delayFunction", error);
//         if (doneCallback) {
//           doneCallback();
//         }
//         setData(originalRecords);
//       }
//     }
//     delayFunction();
//   }

//   function deleteRecord(record, doneCallback) {
//     const originalRecords = [...data];
//     const newRecords = data.filter(function (rec) {
//       return rec.id != record.id;
//     });
//     async function delayFunction() {
//       try {
//         setData(newRecords);
//         await axios.delete(`${restUrl}/${record.id}`, record);
//         if (doneCallback) {
//           doneCallback();
//         }
//       } catch (error) {
//         console.log("error thrown inside delayFunction", error);
//         if (doneCallback) {
//           doneCallback();
//         }
//         setData(originalRecords);
//       }
//     }
//     delayFunction();
//   }

//   function insertRecord(record, doneCallback) {
//     const originalRecords = [...data];
//     const newRecords = [record, ...data];
//     async function delayFunction() {
//       try {
//         setData(newRecords);
//         await axios.post(`${restUrl}/99999`, record);
//         if (doneCallback) {
//           doneCallback();
//         }
//       } catch (error) {
//         console.log("error thrown inside delayFunction", error);
//         if (doneCallback) {
//           doneCallback();
//         }
//         setData(originalRecords);
//       }
//     }
//     delayFunction();
//   }

//   return {
//     data,
//     requestStatus,
//     error,
//     updateRecord,
//     insertRecord,
//     deleteRecord,
//   };
// }

// export default useRequestRest;
