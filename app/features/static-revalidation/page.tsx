import Link from "next/link";
import { createSupaServerClientComponent } from "@/src/lib/supabase";
import { cookies } from 'next/headers';

// cache this page for 1 minute
export const revalidate = 60;

export default async function Posts() {
  const { data: posts } = await createSupaServerClientComponent(cookies).from("posts").select("id, title");

  if (!posts) {
    return <p>No posts found.</p>;
  }

  return posts.map((post) => (
    <p key={post.id}>
      <Link href={`/features/static-revalidation/${post.id}`}>{post.title}</Link>
    </p>
  ));
}
