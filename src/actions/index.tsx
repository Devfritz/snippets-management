'use server'
import { db } from '@/db/db'; 'console';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'


export async function createSnippet(formState: { message: string }, formData: FormData) {

    try {


        // GET INFO FROM FORMDATA
        const title = formData.get('title');
        const code = formData.get('code');

        if (typeof title !== 'string' || title.length < 3) {
            return { message: "Title not valid" }
        }

        if (typeof code !== 'string' || code.length < 10) {
            return { message: "Code not valid" }
        }



        // //  SAVE TO DATABASE
        const snippets = await db.snippet.create({
            data: {
                title,
                code
            }
        })
        console.log(snippets)

        // throw new Error('Failed to save Database')

    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                message: error.message
            }
        } else {
            return {
                message: 'Something Went Wrong....'
            }
        }

    }

    revalidatePath('/');
    // //  redirect to home page
    redirect('/')

}
export async function EditSnippet(id: number, code: string) {

    await db.snippet.update({
        where: { id },
        data: { code }
    })

    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: { id }
    })
    revalidatePath(`/`);
    redirect(`/`)
}