import Head from 'next/head'
import Schema from '../../components/Schema'
import { blogPostingSchema } from '../../lib/seo/schema'
const SITE_URL = process.env.SITE_URL || 'https://medogram.ir'
export default function BlogPost({ post }){
  const canonical=`${SITE_URL}/blog/${post.slug}`
  const schema=blogPostingSchema({
    headline: post.seoTitle||post.title,
    description: post.seoDescription||post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt||post.publishedAt,
    authorName: post.author?.name||'Medogram',
    url: canonical,
    image: post.cover || (SITE_URL + '/logo.png')
  })
  return (<>
    <Head>
      <title>{post.seoTitle||post.title}</title>
      <meta name="description" content={post.seoDescription||post.excerpt}/>
      <link rel="canonical" href={canonical}/>
    </Head>
    <Schema data={schema}/>
    <article><h1>{post.title}</h1></article>
  </>)
}
export async function getStaticPaths(){
  const slugs=['sample-post']
  return { paths: slugs.map(s=>({ params:{ slug:s }})), fallback:false }
}
export async function getStaticProps({ params }){
  const post={
    slug: params.slug, title:'نمونه مقاله', excerpt:'خلاصه کوتاه…',
    seoTitle:'عنوان سئو نمونه', seoDescription:'توضیحات سئو نمونه',
    publishedAt:'2024-01-01T00:00:00.000Z', author:{ name:'Medogram' }
  }
  return { props:{ post } }
}

