import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ivoxa.com'),
  title: 'IVOXA | Engineering Intelligent Automation',
  description:
    'IVOXA builds intelligent software, AI-powered automation, workflow systems, custom business applications, and scalable digital solutions that help businesses operate more efficiently.',
  openGraph: {
    title: 'IVOXA | Engineering Intelligent Automation',
    description:
      'IVOXA builds intelligent software, AI-powered automation, workflow systems, custom business applications, and scalable digital solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ivoxa.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IVOXA | Engineering Intelligent Automation',
    description:
      'IVOXA builds intelligent software, AI-powered automation, workflow systems, and scalable digital solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
