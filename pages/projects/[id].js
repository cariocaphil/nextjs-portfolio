import Layout from '../../components/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link'

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                Check it out <Link href={postData.url}>here</Link>!
                <br></br>
                The github repo is <Link href={postData.repo}>here</Link>.
            </article>
      </Layout>
    );
  }
