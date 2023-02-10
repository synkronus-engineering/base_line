import { mutate } from "swr";
import Router from 'next/router';

    interface typeObjData {
        path_name?:string;
        obj_data?:any;
    }

    export const REST_VERBS = {
        POST: 'POST',
        GET: 'GET',
        PUT: 'PUT'
    } 

    const roleHeaderOptions = (custom_hdrs?:any) => {
        return {"Content-Type": "application/json; charset=UTF-8", ...custom_hdrs};
    }

    const handleAuthResponse = (response: Response, url?: string | undefined) => {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if ([401, 403].includes(response.status)) { 
                    Router.push('/logout');
                    return {data: null, error: 'Unauthorized', statusCode: data.status};
                }
            }
            return !url ? data 
            : (data.status >= 200 &&  data.status <= 299)
                 ? mutate(url).then(() => data)
                    : { data: null, error: 'Algo salió mal', statusCode: data.status };
        });
    } 

  
    export const simpleFetcher = (...args: { headers: any; }[]) => {
        args[1] = { headers: roleHeaderOptions() };
        return fetch(...args as [any]).then((rsp) => handleAuthResponse(rsp));
    };

    export const genericFnMutateFetcher = (url:string, method: string, obj_body?:typeObjData) => {
        return fetch(url,{
            method,
            headers: roleHeaderOptions(),
            body: JSON.stringify(obj_body) 
        }).then((rsp) => handleAuthResponse(rsp, url))
    }

    export const genericFnFetcher = (url:string, method: string, obj_body?:typeObjData, custom_hdrs?:any) => {
        return fetch(url, {
            method,
            headers: roleHeaderOptions(custom_hdrs),
            body: JSON.stringify(obj_body) //{ path_name:'add', data: {...data} }
        }).then(res => res.json()); 
    }
    
    

    export const genericAuthFetcher = (url:string, method: string, obj_body?:typeObjData) => {
        return fetch(url, {
            method,
            headers: roleHeaderOptions(),
            body: JSON.stringify(obj_body) //{ path_name:'add', data: {...data} }
        }).then((rsp) => handleAuthResponse(rsp, url)); 
    }

    export const genericAuthFnFetcher = (url:string, method: string, obj_body?:typeObjData, custom_hdrs?:any) => {
        return fetch(url, {
            method,
            headers: roleHeaderOptions(custom_hdrs),
            body: JSON.stringify(obj_body) 
        }).then(res => handleAuthResponse(res)); 
    }
