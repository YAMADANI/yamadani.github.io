import "./globals.css";
import { Rampart_One } from 'next/font/google';

const rampartOne = Rampart_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rampart',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>YAMADANI</title>
      </head>
      <body className="antialiase overflow: hidden;">
        {children}
      </body>
    </html>
  );
}
