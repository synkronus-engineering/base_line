import { notFound } from "next/navigation";
import { createSupaServerClientComponent } from "@/src/lib/supabase";
import { cookies } from 'next/headers';
import { map } from 'lodash';

export async function generateStaticParams() {
  const { data: posts } = await createSupaServerClientComponent(cookies).from("posts").select("id");
  return map(posts, (p) => ({ id: `${p.id}` })); 
}


async function fetchPost(id: string) {
  const {data, error} = await createSupaServerClientComponent(cookies)
    .from("posts").select().match({ id }).maybeSingle(); 
  return data as any;
}

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await fetchPost(id);

  if (!post) {
    notFound();
  }

  return <pre>{JSON.stringify(post, null, 2)}</pre>;
}
