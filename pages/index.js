import Head from 'next/head'
import Image from 'next/image'
import Schema from '../components/Schema'
import { orgSchema, serviceSchema } from '../lib/seo/schema'
const SITE_URL = process.env.SITE_URL || 'https://medogram.ir'
export default function Home(){
  const title='مدوگرام | تمدید نسخه آنلاین و بهینه‌سازی قیمت دارو'
  const description='مدوگرام خدمات آنلاین پزشکی برای تمدید نسخه و بهینه‌سازی قیمت دارو ارائه می‌کند.'
  const canonical=SITE_URL+'/'
  return (<>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <link rel="canonical" href={canonical}/>
    </Head>
    <Schema data={[
      orgSchema({ url:SITE_URL, logo:'/logo.png' }),
      serviceSchema({ name:'تمدید نسخه آنلاین', description, url:canonical })
    ]}/>
    <main>
      <h1 className="sr-only">{title}</h1>
      <Image src="/logo.png" alt="لوگوی مدوگرام" width={512} height={512} priority />
    </main>
  </>)
}

