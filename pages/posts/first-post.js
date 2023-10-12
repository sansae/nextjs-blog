import Head from 'next/head';

import Link from 'next/link';

import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <div>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>

        <h1>First Post</h1>

        <h2>Go to <Link href="/">home page</Link></h2>
      </Layout>
    </div>
  )
}