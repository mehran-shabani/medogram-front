import './globals.css';
import ClientLayout from './ClientLayout';
import Script from 'next/script';

export const metadata = {
  title: 'مدوگرام | ویزیت با دکتر هوشمند AI و خدمات پزشکی آنلاین',
  description:
    'مدوگرام | خدمات پزشکی آنلاین، ویزیت با دکتر هوشمند AI و مراقبت‌های بالینی آنلاین و تلفنی، شامل ویزیت آنلاین و مشاوره پزشکی.',
  openGraph: {
    type: 'website',
    url: 'https://www.medogram.ir',
    title: 'مدوگرام | ویزیت با دکتر هوشمند AI و خدمات پزشکی آنلاین',
    description:
      'مدوگرام ارائه دهنده خدمات پزشکی و مشاوره آنلاین با دکتر هوشمند AI و مراقبت‌های بالینی تلفنی.',
    images: [{ url: 'https://www.medogram.ir/logo.png' }],
  },
};

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

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

