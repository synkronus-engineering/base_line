
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { API_STATUS, API_VERBS, ResponseApiRest, RESPONSE_ERRORS } from '@/src/data/utils/rest_definitions';
import type { TypeEndpoint } from '.'
import type { NextApiRequest, NextApiResponse } from 'next'

const get: TypeEndpoint['handlers']['info'] = async (req:NextApiRequest, res:NextApiResponse) => {

  if(req.method !== API_VERBS.GET && req.method !== API_VERBS.POST ) 
    return res.json({ data: null, error: RESPONSE_ERRORS.BAD_REQUEST });
  
  const { path_name, obj_data } = req.body; 
  let result = { data: null, status: API_STATUS.BAD_REQUEST, error:null } as ResponseApiRest;
  
  const supabaseServerClient = createServerSupabaseClient({ req, res,});
  const { data: { user } } = await supabaseServerClient.auth.getUser();

  try {
    if(req.method === 'GET') {
      result = await supabaseServerClient.from('todos').select('*').order('id', {ascending: true});
    } else {
        switch (path_name) {  
          case 'add' :
            result = await supabaseServerClient.from('todos').insert({ ...obj_data, user_id: user?.id }).select();
          break;
          case 'delete' :
            result = await supabaseServerClient.from('todos').delete().eq('id',obj_data.id).select();
          break;
          case 'is_done' :
            result = await supabaseServerClient.from('todos').update({...obj_data}).eq('id',obj_data.id).select();
          break;
    
          default:
            result = {data: null, status: API_STATUS.NOT_FOUND, error:RESPONSE_ERRORS.BAD_REQUEST };
          break;
        }
    }

  } catch (error) {
    result =  {data: null, status: API_STATUS.SERVER_ERROR, error: get(error,'message', 'server error')}
  }


  return res.status(result.status).json(result);
};

export default get
