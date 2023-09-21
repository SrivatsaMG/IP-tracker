import './globals.css';
import { Inter, Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

export const metadata = {
  title: 'IP Tracker',
  description: 'Enter an IP address and track it on the map',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${rubik.variable}`}>
      <body>{children}</body>
    </html>
  );
}
