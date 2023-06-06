import { createServerRouteClient } from '@/src/lib/supabase'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


 export async function GET(req:NextRequest) {
    const supabase = createServerRouteClient(cookies);
    const requestUrl = new URL(req.url)
    const code = requestUrl.searchParams.get('code')
    console.log('auth calback ***',code );
    if (code) 
        await supabase.auth.exchangeCodeForSession(String(code))

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin)
};


// check https://github.com/supabase/supabase/blob/master/examples/auth/nextjs/app/auth/callback/route.ts