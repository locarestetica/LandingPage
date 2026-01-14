// app/layout.tsx
import './globals.css';
import localFont from "next/font/local";
import Script from "next/script"; // Importação necessária para os rastreadores

// 1. Configuração da The Seasons (Pasta: TheSeasonsFont)
const theSeasons = localFont({
  src: [
    {
      path: '../public/fonts/TheSeasonsFont/the-seasons-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/TheSeasonsFont/the-seasons-italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/TheSeasonsFont/the-seasons-light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/TheSeasonsFont/the-seasons-light-italic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/TheSeasonsFont/the-seasons-bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/TheSeasonsFont/the-seasons-bold-italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-serif',
  display: 'swap',
});

// 2. Configuração da Josefin Sans
const josefinSans = localFont({
  src: [
    {
      path: '../public/fonts/josefin-sans/JosefinSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/josefin-sans/JosefinSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/josefin-sans/JosefinSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/josefin-sans/JosefinSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});

// 3. Configuração da Montserrat
const montserrat = localFont({
  src: [
    {
      path: '../public/fonts/Montserrat-Full-Version/Montserrat-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Montserrat-Full-Version/Montserrat-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Montserrat-Full-Version/Montserrat-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11110618840"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11110618840');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '771659549232827');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${josefinSans.variable} ${theSeasons.variable} ${montserrat.variable} font-sans antialiased`}> 
        {children}
      </body>
    </html>
  );
}