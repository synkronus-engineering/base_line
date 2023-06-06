import { cookies } from 'next/headers'
import { createSupaServerActionClient } from '@/src/lib/supabase'
import { revalidatePath } from 'next/cache'


export default async function NewTodo() {
  const addPost = async (formData: FormData) => {
    'use server'

    const title = formData.get('title')
    const supabase = createSupaServerActionClient({ cookies })
    await supabase.from('post').insert({ title })
    revalidatePath('/features')
  }

  return (
    <form action={addPost}>
      <input name="title" />
    </form>
  )
}