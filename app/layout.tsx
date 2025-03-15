import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import Script from "next/script";

export const metadata: Metadata = {
  title: 'TokHop USA - TikTok USA Access Platform',
  description: 'TokHop USA enables creators outside the US to post directly to TikTok USA, opening the door to 100M+ American viewers.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-Z0W4EG1CVG`}
          strategy='afterInteractive'
        />
        <Script
          id="google-analytics" strategy='afterInteractive'>
          {
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-Z0W4EG1CVG');`
          }
        </Script>
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
