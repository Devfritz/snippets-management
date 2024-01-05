import type { Snippet } from '@prisma/client';
interface PropsEditForm {
  snippet: Snippet
}
function FormEdit({ snippet }: PropsEditForm) {
  return <div>Hey {snippet.code}</div>;
}

export default FormEdit;
