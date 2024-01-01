import { db } from "@/db/db"
import { notFound } from "next/navigation"

interface Props {
    params: {
        id: string
    }

}

export default async function showSnippet({ params }: Props) {
    //  show page 
    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(params.id)
        }
    })

    console.log(snippet)
    //  show page 
    if (!snippet) return notFound()

    return <div>{snippet.title}</div>


}