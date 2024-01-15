'use client'
import * as actions from '@/actions';
import { useFormState } from "react-dom";

export default function CreatesnippetPage() {
    const [formState, action] = useFormState(actions.createSnippet, { message: '' })

    // async function createSnippet(formData: FormData) {
    //     // this is to be a server action
    //     'use server';
    //     // GET INFO FROM FORMDATA
    //     const title = formData.get('title') as string;
    //     const code = formData.get('code') as string;

    //     //  SAVE TO DATABASE
    //     const snippets = await db.snippet.create({
    //         data: {
    //             title,
    //             code
    //         }
    //     })
    //     console.log(snippets)
    //     //  redirect to home page
    //     redirect('/')

    // }

    return <form action={action}>
        <h3 className="font-bold text-2xl mt-10 text-center">Create a snippet</h3>

        <div className="mb-2">
            <label htmlFor="title" className="w-12">Title</label>
            <input name="title" className="w-full border rounded p-2" />
        </div>

        <div className="mb-2">
            <label htmlFor="code" className="w-12">Code</label>
            <textarea name="code" className="w-full border rounded p-2" />
        </div>


        {formState?.message ? <p className="bg-red-500 p-2 m-2 text-white">{formState?.message}</p> : null}

        <div className="flex items-center justify-center">
            <button type="submit" className="p-2 bg-blue-600 rounded-md text-white w-2/4">Create</button>
        </div>

    </form>

} 