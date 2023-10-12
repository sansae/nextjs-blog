import Head from 'next/head';

import Link from 'next/link';

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>

      <h2>Go to <Link href="/">home page</Link></h2>
    </div>
  )
}