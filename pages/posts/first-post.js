import Link from 'next/link';

export default function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>

      <h2>Go to <Link href="/">home page</Link></h2>
    </div>
  )
}