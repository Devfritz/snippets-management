import FormEdit from "@/components/FormEdit";
import { db } from "@/db/db";
import { notFound } from "next/navigation";


interface PropsEditSnippetPAge {
    params: {
        id: string
    }
}

const page = async ({ params }: PropsEditSnippetPAge) => {
    const id = parseInt(params.id);

    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(params.id)
        }
    })


    //  show page 
    if (!snippet) return notFound()

    return (
        <div>
            <h1>Editing Snippet with id {id}</h1>
            <FormEdit snippet={snippet} />

        </div>
    )
}

export default page