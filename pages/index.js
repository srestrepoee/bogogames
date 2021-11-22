import Layout from '../components/layouts/default'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Posts = ({allPostsData}) => 
  <ul className="">
    {allPostsData.map(({ id, date, title }) => (
      <li key={id}>
        {title}
        <br />
        {id}
        <br />
        {date}
      </li>
    ))}
  </ul>


export default function Home({ allPostsData }) {
  return (
    <Layout>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">BogoGames!</a>
        </h1>

        <Posts allPostsData={allPostsData} />

      </main>

    </Layout>
  )
}
