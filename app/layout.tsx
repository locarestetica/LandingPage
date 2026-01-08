// app/layout.tsx
import './globals.css';
import localFont from "next/font/local";

// 1. Configuração da The Seasons (Serifada Premium)
const theSeasons = localFont({
  src: [
    {
      path: '../public/fonts/The Seasons Font/Fontspring-DEMO-theseasons-reg.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/The Seasons Font/Fontspring-DEMO-theseasons-it.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/The Seasons Font/Fontspring-DEMO-theseasons-bd.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-serif',
});

// 2. Configuração da Josefin Sans (Textos Gerais - Peso Regular 400)
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
});

// 3. Configuração da Montserrat (Menu e Botões)
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
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${josefinSans.variable} ${theSeasons.variable} ${montserrat.variable} font-sans`}> 
        {children}
      </body>
    </html>
  );
}