import {
  createPagesBrowserClient,
  createPagesServerClient,
  createRouteHandlerClient,
  createClientComponentClient,
  createServerComponentClient,
  createServerActionClient
} from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next/types';

export const supabaseClient = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

// export const createBrowserClient = () => createPagesBrowserClient();
export const createSupaClientComponent = () => createClientComponentClient();

// export const createServerClient = ( req: NextApiRequest, res: NextApiResponse ) => createPagesServerClient({ req, res });
export const createSupaServerClientComponent = (cookies:any) => createServerComponentClient({cookies});
export const createSupaServerActionClient = (cookies:any) => createServerActionClient({cookies});

// creates supa instance for route handlers (GET, PUT, POST, DELETE...)
export const createServerRouteClient = (cookies:any) => createRouteHandlerClient({cookies});
