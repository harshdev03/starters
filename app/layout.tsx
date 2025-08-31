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
  title: "Starter's Snippet's - VS Code Extension",
  description:
    "A VS Code extension to quickly generate starter files and boilerplate code for projects in multiple programming languages.",
  keywords: [
    "starter snippets",
    "vscode extension",
    "boilerplate generator",
    "code snippets",
    "project setup",
    "developer tools",
    "quick start",
    "coding templates",
    "starter files",
  ],
  authors: [{ name: "Harsh Chalwadi" }],
  creator: "Harsh Chalwadi",
  publisher: "Harsh Chalwadi",
  metadataBase: new URL("https://starters.harrsh.xyz"),
  openGraph: {
    title: "Starter's Snippet's - VS Code Extension",
    description:
      "Quickly create starter files and boilerplate snippets for multiple programming languages inside VS Code.",
    url: "https://starters.harrsh.xyz",
    siteName: "Starter's Snippet's",
    images: [
      {
        url: "/favicon.ico", 
        width: 1200,
        height: 630,
        alt: "Starter's Snippet's Extension",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Starter's Snippet's - VS Code Extension",
    description:
      "Generate boilerplate snippets and starter code inside VS Code instantly.",
    images: ["/favicon.ico"],
    creator: "@harrshh0", 
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Starter's Snippet's",
  generator: "Next.js",
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
