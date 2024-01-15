'use client'
import type { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import * as actions from '@/actions'
import { useState } from 'react';
interface PropsEditForm {
  snippet: Snippet
}
function FormEdit({ snippet }: PropsEditForm) {
  const [code, setCode] = useState("")
  const handleChangeEditor = (value: string = "") => {
    setCode(value)
  }

  const EditSnippets = actions.EditSnippet.bind(null, snippet.id, code)
  return <div>
    <Editor height="40vh" theme='vs-dark' defaultLanguage="javascript" defaultValue={snippet.code} options={{ minimap: { enabled: false } }} onChange={handleChangeEditor} />
    <form action={EditSnippets}>
      <button type='submit' className='mt-4 p-4 rounded'>Save</button>
    </form>
  </div>
}

export default FormEdit;
