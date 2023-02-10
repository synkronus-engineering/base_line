import useSWR from "swr";
import { genericFnMutateFetcher, REST_VERBS, simpleFetcher } from "@/src/data/utils/fetcher";
import { atom,  selector } from "recoil";
import { filter } from "lodash";
import { APP_CFG_REST_URLS } from "@/src/data/utils/rest_definitions";

const baseUrl = `${APP_CFG_REST_URLS.BASE_URL}/api/todos/info`;

interface ITodos {
    id: number;
    inserted_at: string;
    is_complete: boolean;
    task: string;
    user_id: string;
}

const useTodoListData = () => {
    const {data, error} = useSWR(`${baseUrl}`, simpleFetcher);
    return {
      data,
      isLoading: !error && !data,
      isError: error,
    };
}

const todoMutations = async (path_name:string, objBody: any) => {
    return await genericFnMutateFetcher(`${baseUrl}`, REST_VERBS.POST, {path_name, obj_data: {...objBody}});
};


const todoData = atom({
    key: 'todoListAtom',
    default: [] as ITodos[]
});

const getTodoStats = selector({
    key: 'getTodoStatSlctr',
    get: ({ get }) => {
        const todoList = get(todoData);
        if((todoList || []).length > 0) 
            return {numTodos: todoList.length, completed: filter(todoList, 'is_complete').length }    
        else 
            return {numTodos: 0, completed: 0 }
    },
});

export {
    useTodoListData,
    todoMutations,
    todoData,
    getTodoStats
};

export type { 
    ITodos 
};





// const getLandinFrontInfo_ClientEndPoint = async (params:string,  filterBy?:string, paramBy?:string) => { 
//     return await genericFnFetcher(`${baseStoreUrl}/info?path=${params}&filterBy=${filterBy}&paramBy=${paramBy}`, 'GET');
//   }


  
// const todosGet = async (path_name:string) => {
//     return await genericFnFetcher(`${baseUrl}/get?path_name=${path_name}`, REST_VERBS.GET);
// }

// const todoData = atom({
//     key: 'todoListAtom',
//     default: [] as ITodos[],
//     effects_UNSTABLE: [
//         ({setSelf}) => {
//             todosGet('info').then(({ data, error }) =>  { 
//                 setSelf((!data && error ) ? new DefaultValue() : data )
//             })
//         },
//     ],
// });

