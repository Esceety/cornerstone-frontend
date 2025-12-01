import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Cornerstone Deliverance & Development Ministries',
    template: '%s | Cornerstone Deliverance'
  },
  description: 'Building Community, Restoring Hope—Through Faith and Affordable Housing. Cornerstone Deliverance & Development Ministries for Christ, Inc. serves communities in Florida and Georgia.',
  keywords: ['affordable housing', 'faith-based ministry', 'community development', 'Georgia', 'Florida', 'nonprofit organization', 'family strengthening', 'youth programs'],
  authors: [{ name: 'Cornerstone Deliverance & Development Ministries' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.cornerstonedeliveranceus.com',
    siteName: 'Cornerstone Deliverance & Development Ministries',
    title: 'Cornerstone Deliverance & Development Ministries',
    description: 'Building Community, Restoring Hope—Through Faith and Affordable Housing',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
