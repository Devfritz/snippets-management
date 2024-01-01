import { db } from "@/db/db"
import Link from "next/link";


export default async function Home() {
  const snippets = await db.snippet.findMany();

  const listSnippets = snippets.map(snippet => {
    return <ul className="mt-6 flex justify-between items-center border rounded py-2 px-2" key={snippet.id}><Link key={snippet.id} href={`snippets/${snippet.id}`}>{snippet.title}</Link><div>View</div></ul>
  })
  return (
    <main>
      <div className="flex justify-between mt-6">
        <h1 className="font-bold">Snippets</h1>
        <div className="border rounded py-4 px-4">NEW</div>
      </div>
      {listSnippets}
    </main>
  )
}
