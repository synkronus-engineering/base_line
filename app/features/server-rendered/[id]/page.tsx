import { notFound } from "next/navigation";
import { createSupaServerClientComponent } from "@/src/lib/supabase";
import { cookies } from 'next/headers';

// do not cache this page
export const revalidate = 0;

export async function generateStaticParams() {
  const { data: posts } = await createSupaServerClientComponent(cookies).from("posts").select("id");

  return posts?.map(({ id }) => ({
    id,
  }));
}

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: post } = await createSupaServerClientComponent(cookies)
    .from("posts")
    .select()
    .match({ id })
    .single();

  if (!post) {
    notFound();
  }

  return <pre>{JSON.stringify(post, null, 2)}</pre>;
}
