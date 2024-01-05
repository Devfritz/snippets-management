'use client'
import type { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import { useState } from 'react';
interface PropsEditForm {
  snippet: Snippet
}
function FormEdit({ snippet }: PropsEditForm) {
  const [code, setCode] = useState("")
  const handleChangeEditor = (value: string = "") => {
    setCode(value)
  }
  return <Editor height="40vh" theme='vs-dark' defaultLanguage="javascript" defaultValue={snippet.code} options={{ minimap: { enabled: false } }} onChange={handleChangeEditor} />;
}

export default FormEdit;
