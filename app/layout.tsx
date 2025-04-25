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
  title: "Project Nemo",
  description: "Captain Nemo's website",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ff2e2e", // Optional: Set a theme color for your app
  openGraph: {
    title: "Project Nemo",
    description: "Captain Nemo's website",
    url: "https://projectnemo.in", // Change this to your website URL
    siteName: "Project Nemo",
    images: [
      {
        url: "/images/me.jpg", // Optional: Your Open Graph image URL
        width: 1200,
        height: 630,
        alt: "Project Nemo Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle", // Replace with your Twitter handle if available
    title: "Project Nemo",
    description: "Captain Nemo's website",
    images: ["/images/og-image.jpg"], // Optional: Your Open Graph image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Related Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="description" content="Captain Nemo's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff2e2e" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Project Nemo" />
        <meta property="og:description" content="Captain Nemo's website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:site_name" content="Project Nemo" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <meta name="twitter:title" content="Project Nemo" />
        <meta name="twitter:description" content="Captain Nemo's website" />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
