import Head from 'next/head';

import Layout from '../../components/layout';

import { getAllPostIds, getPostData } from '../../lib/posts';

import Date from '../../components/date';

import ReactMarkdown from 'react-markdown';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>

        <strong>{postData.title}</strong>
        <br />
        <Date dateString={postData.date} />
        <br />
        <ReactMarkdown>{postData.contentHtml}</ReactMarkdown>

        {/* only if using react remark, but using remark breaks app for some reason */}
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} style={{ marginTop:'30px' }} /> */}
      </Layout>;
    </>
  )
}