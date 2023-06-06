

[Article Post](https://supabase.com/blog/fetching-and-caching-supabase-data-in-next-js-server-components)

create table if not exists posts (

  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text,
  content text
);

insert into posts(title, content)
values
  ('My first post', 'Wow! What a great post.'),
  ('My second post', 'This one needs a little work!');
