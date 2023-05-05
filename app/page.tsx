import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href='/search'>Search</Link>
          <Link href='/categories/tech'>Tech</Link>
        </li>
      </ul>
    </main>
  )
}
