import Head from 'next/head'
export default function Schema({ data }) {
  if (!data) return null
  const arr = Array.isArray(data) ? data : [data]
  return (
    <Head>
      {arr.map((d,i)=>(<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(d)}} />))}
    </Head>
  )
}

