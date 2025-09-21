import Head from 'next/head'
import Schema from '../components/Schema'
import { physicianSchema } from '../lib/seo/schema'
const SITE_URL = process.env.SITE_URL || 'https://medogram.ir'
export default function About(){
  const canonical=SITE_URL+'/about'
  return (<>
    <Head>
      <title>درباره ما | مدوگرام</title>
      <meta name="description" content="معرفی تیم و بنیان‌گذار مدوگرام"/>
      <link rel="canonical" href={canonical}/>
    </Head>
    <Schema data={physicianSchema({ name:'بنیان‌گذار مدوگرام', url:canonical, image:SITE_URL+'/logo.png' })}/>
    <main>درباره ما</main>
  </>)
}

