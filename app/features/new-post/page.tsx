import { cookies } from 'next/headers'
import { createSupaServerActionClient } from '@/src/lib/supabase'
import { revalidatePath } from 'next/cache'


export default async function NewTodo() {
  const addPost = async (formData: FormData) => {
    'use server'
    const {title, content} = Object.fromEntries(formData.entries())
    const supabase = createSupaServerActionClient({ cookies })
    await supabase.from('post').insert({ title, content })
    revalidatePath('/features/realtime')
  }

  return (
    <form action={addPost}>
      <input name="title" />
      <input name="content" />
    </form>
  )
}

// check https://www.youtube.com/watch?v=Qc8_y9irMP4&list=PL5S4mPUpp4OtwG-qCxm8gA_hjaBq0OPdz&index=9&ab_channel=Supabase