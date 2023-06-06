'use client'
import { useEffect, useState } from 'react'
import { createSupaClientComponent } from "@/src/lib/supabase";


export default function RealtimeSinglePost({ serverPost }: { serverPost: any }) {
  const supabase = createSupaClientComponent();
  const [post, setPost] = useState(serverPost)

  useEffect(() => {
    setPost(serverPost)
  }, [serverPost])

  useEffect(() => {
    const channel = supabase
      .channel('realtime post')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'posts',
          filter: `id=eq.${post.id}`,
        },
        (payload) => {
          setPost(payload.new as any)
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase, post, setPost])

  return <pre>{JSON.stringify(post, null, 2)}</pre>
}