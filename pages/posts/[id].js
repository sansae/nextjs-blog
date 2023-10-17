import Layout from '../../components/layout';

import { getAllPostIds, getPostData } from '../../lib/posts';

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
        <strong>{postData.title}</strong>
        <br />
        {postData.date}
        <br />

        <ReactMarkdown>{postData.contentHtml}</ReactMarkdown>

        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} style={{ marginTop:'30px' }} /> */}
      </Layout>;
    </>
  )
}