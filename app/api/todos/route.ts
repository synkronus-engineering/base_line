import { API_STATUS, ResponseApiRest } from '@/src/data/utils/rest_definitions';
import { createServerRouteClient } from '@/src/lib/supabase'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers';
import { get } from 'lodash';


 export async function GET(req:Request) {
  let result = { data: null, status: API_STATUS.BAD_REQUEST, error:null } as ResponseApiRest;  
  const supaRouteServerClient = createServerRouteClient(cookies);
  const todosTbl = supaRouteServerClient.from('todos');
  try {
    result = await todosTbl.select('*').order('id', {ascending: true});
  } catch (error) {
    result =  {data: null, status: API_STATUS.SERVER_ERROR, error: get(error,'message', 'server error')}
  }
  return NextResponse.json(result);
};

 export async function POST(req:Request) {
  let result = { data: null, status: API_STATUS.BAD_REQUEST, error:null } as ResponseApiRest;  
  const supaRouteServerClient = createServerRouteClient(cookies);
  const todosTbl = supaRouteServerClient.from('todos');
  const { obj_data } = await req.json();
  const { data: { user } } = await supaRouteServerClient.auth.getUser();
  try {
    result = await todosTbl.insert({ ...obj_data, user_id: user?.id }).select();
  } catch (error) {
    result =  {data: null, status: API_STATUS.SERVER_ERROR, error: get(error,'message', 'server error')}
  }
  return NextResponse.json(result);
};

 export async function PUT(req:Request) {
  let result = { data: null, status: API_STATUS.BAD_REQUEST, error:null } as ResponseApiRest;  
  const supaRouteServerClient = createServerRouteClient(cookies);
  const todosTbl = supaRouteServerClient.from('todos');
  const { obj_data } = await req.json();
  try {
    result = await todosTbl.update({...obj_data }).eq('id', (obj_data?.id || 0)).select();
  } catch (error) {
    result =  {data: null, status: API_STATUS.SERVER_ERROR, error: get(error,'message', 'server error')}
  }
  return NextResponse.json(result);
};

 export async function DELETE(req:Request) {
  let result = { data: null, status: API_STATUS.BAD_REQUEST, error:null } as ResponseApiRest;  
  const supaRouteServerClient = createServerRouteClient(cookies);
  const todosTbl = supaRouteServerClient.from('todos');
  const { obj_data } = await req.json();
  try {
    result = await todosTbl.delete().eq('id', (obj_data?.id || 0)).select('*');
  } catch (error) {
    result =  {data: null, status: API_STATUS.SERVER_ERROR, error: get(error,'message', 'server error')}
  }
  return NextResponse.json(result);
};


// import { createServerClient } from '@/src/lib/supabase'
// import { API_STATUS, API_VERBS, ResponseApiRest, RESPONSE_ERRORS } from '@/src/data/utils/rest_definitions';
// import type { NextApiRequest, NextApiResponse } from 'next'
// import { get } from 'lodash';

//  export default async function handle(req:NextApiRequest, res:NextApiResponse) {

//   if(req.method !== API_VERBS.GET && req.method !== API_VERBS.POST ) 
//     return res.json({ data: null, error: RESPONSE_ERRORS.BAD_REQUEST });
  
//   const { path_name, obj_data } = req.body; 
//   let result = { data: null, status: API_STATUS.BAD_REQUEST, error:null } as ResponseApiRest;
  
//   const supabaseServerClient = createServerClient(req, res);
//   const { data: { user } } = await supabaseServerClient.auth.getUser();

//   try {
//     const todosTbl = supabaseServerClient.from('todos');
//     if(req.method === 'GET') {
//       result = await todosTbl.select('*').order('id', {ascending: true});
//     } else {
//         switch (path_name) {  
//           case 'add' :
//             result = await todosTbl.insert({ ...obj_data, user_id: user?.id }).select();
//           break;
//           case 'delete' :
//             result = await todosTbl.delete().eq('id',obj_data.id).select();
//           break;
//           case 'is_done' :
//             result = await todosTbl.update({...obj_data}).eq('id',obj_data.id).select();
//           break;
    
//           default:
//             result = {data: null, status: API_STATUS.NOT_FOUND, error:RESPONSE_ERRORS.BAD_REQUEST };
//           break;
//         }
//     }

//   } catch (error) {
//     result =  {data: null, status: API_STATUS.SERVER_ERROR, error: get(error,'message', 'server error')}
//   }


//   return res.status(result.status).json(result);
// };
