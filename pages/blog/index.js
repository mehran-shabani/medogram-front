import Head from 'next/head'
const SITE_URL = process.env.SITE_URL || 'https://medogram.ir'
export default function BlogIndex({ posts }){
  const title='بلاگ مدوگرام', description='مقالات آموزشی و خبری مدوگرام', canonical=SITE_URL+'/blog'
  return (<>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <link rel="canonical" href={canonical}/>
    </Head>
    <main>
      <h1>{title}</h1>
      <ul>{posts.map(p=> <li key={p.slug}><a href={'/blog/'+p.slug}>{p.title}</a></li>)}</ul>
    </main>
  </>)
}
export async function getStaticProps(){
  const posts=[{ slug:'sample-post', title:'نمونه مقاله'}]
  return { props:{ posts } }
}

