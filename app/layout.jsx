import './globals.css';
import ClientLayout from './ClientLayout';
import Script from 'next/script';

export const metadata = {
  title: 'مدوگرام | مقالات پزشکی و سلامت',
  description:
    'مدوگرام | مقالات تخصصی پزشکی و سلامت. اطلاعات مفید و به‌روز در زمینه پزشکی، سلامت و درمان.',
  keywords: 'مقالات پزشکی، سلامت، درمان، پزشکی، مدوگرام',
  openGraph: {
    type: 'website',
    url: 'https://www.medogram.ir',
    title: 'مدوگرام | مقالات پزشکی و سلامت',
    description:
      'مقالات تخصصی پزشکی و سلامت. اطلاعات مفید و به‌روز در زمینه پزشکی، سلامت و درمان.',
    images: [{ url: 'https://www.medogram.ir/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مدوگرام | مقالات پزشکی و سلامت',
    description: 'مقالات تخصصی پزشکی و سلامت',
    images: ['https://www.medogram.ir/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * ریشه‌ی لای‌اوت برنامه را با جهت راست‌به‌چپ و بارگذاری اسکریپت‌های آنالیتیکس، ویجت گفت‌وگو و داده‌های ساختاری‌شده فراهم می‌کند.
 *
 * @param {{children: React.ReactNode}} props.children - محتوای فرزند که درون ClientLayout رندر می‌شود.
 * @returns {JSX.Element} عنصر ریشه شامل تگ `<html lang="fa" dir="rtl">`، `<body>`، سه اسکریپت (Yektanet، Raychat، Structured Data) و ClientLayout که فرزندان را نگه می‌دارد.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {/* Yektanet analytics */}
        <Script id="yektanet" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `!function(t,e,n){t.yektanetAnalyticsObject=n,t[n]=t[n]||function(){t[n].q.push(arguments)},t[n].q=t[n].q||[];const a=new Date,r=a.getFullYear().toString()+"0"+a.getMonth()+"0"+a.getDate()+"0"+a.getHours(),c=e.getElementsByTagName("script")[0],s=e.createElement("script");s.id="ua-script-slNJxYZX";s.dataset.analyticsobject=n;s.async=1;s.type="text/javascript";s.src="https://cdn.yektanet.com/rg_woebegone/scripts_v3/slNJxYZX/rg.complete.js?v="+r,c.parentNode.insertBefore(s,c)}(window,document,"yektanet");`
        }} />

        {/* Raychat widget */}
        <Script id="raychat" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `window.RAYCHAT_TOKEN = "7118d195-bc06-48c0-b1cd-5d832fef9b44";(function(){var d=document;var s=d.createElement("script");s.src="https://widget-react.raychat.io/install/widget.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
        }} />

        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "مدوگرام",
              "description": "مقالات تخصصی پزشکی و سلامت",
              "url": "https://www.medogram.ir",
              "logo": "https://www.medogram.ir/logo.png",
              "sameAs": [
                "https://www.medogram.ir"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Persian"
              },
              "medicalSpecialty": [
                "General Practice",
                "Health Education",
                "Medical Information"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "مقالات پزشکی",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "مقالات پزشکی",
                      "description": "مقالات تخصصی پزشکی و سلامت"
                    }
                  }
                ]
              }
            })
          }}
        />

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

