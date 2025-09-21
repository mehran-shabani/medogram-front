import Head from 'next/head'
import Schema from '../components/Schema'
import { faqSchema } from '../lib/seo/schema'
const SITE_URL = process.env.SITE_URL || 'https://medogram.ir'
export default function Contact(){
  const canonical=SITE_URL+'/contact'
  const faq = faqSchema({ faqs:[
    { q:'چگونه با پشتیبانی مدوگرام تماس بگیرم؟', a:'از طریق فرم تماس یا ایمیل info@medogram.ir.' },
    { q:'ساعت کاری شما چیست؟', a:'همه روزه از ۹ تا ۱۸ به وقت تهران.' }
  ]})
  return (<>
    <Head>
      <title>تماس با ما | مدوگرام</title>
      <meta name="description" content="راه‌های ارتباط با مدوگرام"/>
      <link rel="canonical" href={canonical}/>
    </Head>
    <Schema data={faq} />
    <main>تماس با ما</main>
  </>)
}

