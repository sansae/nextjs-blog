import Head from 'next/head';

import Layout from '../../components/layout';

import { getAllPostIds, getPostData } from '../../lib/posts';

import Date from '../../components/date';

import ReactMarkdown from 'react-markdown';

import utilStyles from '../../styles/utils.module.css';

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

        <article>
          <h1 className={utilStyles.headingX1}>{postData.title}</h1>
          
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>

          <div>
            <ReactMarkdown>{postData.contentHtml}</ReactMarkdown>
          </div>
        </article>


        {/* only if using react remark, but using remark breaks app for some reason */}
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} style={{ marginTop:'30px' }} /> */}
      </Layout>;
    </>
  )
}