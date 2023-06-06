"use client";
import { useEffect, useState } from "react";
import { createSupaClientComponent } from "@/src/lib/supabase";


export default function ClientPosts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await createSupaClientComponent().from("posts").select();
      setPosts(data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <pre>{JSON.stringify(posts, null, 2)}</pre>
  );
}
