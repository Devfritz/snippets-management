'use client'
interface errorPageProps {
    error: Error,
    reset: () => void
}

export default function pageError({ error }: errorPageProps) {
    return <p>{error.message}</p>
}