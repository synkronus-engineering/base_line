import { createSupaServerClientComponent } from "@/src/lib/supabase";
import { notFound, redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import RealtimeSinglePost from "./single-post";

export default async function Post({ params: { id } }: { params: { id: string } }) {
  const supabase = createSupaServerClientComponent(cookies)

  const { data: { session } } = await supabase.auth.getSession()

  // this is a protected route - only users who are signed in can view this route
  if (!session) redirect('/')

  const { data: post } = await supabase.from('posts').select().match({ id }).single()

  if (!post) notFound()

  return <RealtimeSinglePost serverPost={post} />;
}