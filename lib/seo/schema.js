export const jsonLd = (obj) => ({ __html: JSON.stringify(obj) })
export const orgSchema = ({ name='Medogram', url=process.env.SITE_URL||'https://medogram.ir', logo='/logo.png' }={}) => ({
  '@context':'https://schema.org','@type':'MedicalBusiness', name, url, logo: url+logo
})
export const physicianSchema = ({ name, url, image, sameAs=[] }) => ({
  '@context':'https://schema.org','@type':'Physician', name, url, image, sameAs
})
export const blogPostingSchema = ({ headline, description, datePublished, dateModified, authorName, url, image }) => ({
  '@context':'https://schema.org','@type':'BlogPosting',
  headline, description, datePublished, dateModified,
  author:{'@type':'Person', name:authorName}, mainEntityOfPage:url, image:Array.isArray(image)?image:[image]
})
export const serviceSchema = ({ name, description, url }) => ({
  '@context':'https://schema.org','@type':'Service', name, description, url
})
export const faqSchema = ({ faqs=[] }) => ({
  '@context':'https://schema.org','@type':'FAQPage',
  mainEntity: faqs.map(({q,a})=>({'@type':'Question', name:q, acceptedAnswer:{'@type':'Answer', text:a}}))
})

