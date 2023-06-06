"use client";

import { useEffect, useState } from "react";
import { createSupaClientComponent } from "@/src/lib/supabase";

const supabase = createSupaClientComponent();

// realtime subscriptions need to be set up client-side
// this component takes initial posts as props and automatically
// updates when new posts are inserted into Supabase's `posts` table
export default function RealtimePosts({ serverPosts }: { serverPosts: any }) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    console.log('i got handled realtime ***',posts);
  }, [posts]);

  useEffect(() => {
    // this overwrites `posts` any time the `serverPosts` prop changes
    // this happens when the parent Server Component is re-rendered
    setPosts(serverPosts);
    console.log('i got handled server side ***',posts);
  }, [serverPosts]);

  useEffect(() => {
    // ensure you have enabled replication on the `posts` table
    // https://app.supabase.com/project/_/database/replication
    const channel = supabase.channel("*")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "posts" },
        (payload) => {
          console.log('got payload on changes ***',payload );
          if(payload.eventType == 'INSERT') {
            setPosts((posts: any) => [...posts, payload.new])
          } else if(payload.eventType == 'UPDATE') {
            setPosts((posts: any) => [ ...posts.map((p:any) => (p?.id === payload.new.id ) ? payload.new : p) ])
          }
        }
      )
      .subscribe(()=> {
        console.log('got subscribed ***', );
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [serverPosts]);

  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}
