import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
