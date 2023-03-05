import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a software engineer</p>
        <p>
        Originally from a media background, I fell in love with front-end development while working for a web agency in 2015. I have been enjoying the pleasures of tackling technical challenges, problem-solving and exploring the latest web technologies ever since. Recently, I obtained the Bachelor's-level diploma in Front-End-Development from <a href="https://openclassrooms.com/en/paths/315-front-end-developer">Openclassrooms</a>. Ideally, my work is at the service of a higher, frictionless user experience. In my freetime I'm a sports-geek (Basketball), an <a href="https://www.goodreads.com/user/show/129723443-cariocaphil"> avid reader </a>  and a restless traveller.        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}