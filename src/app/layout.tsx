import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shanda AI Research | Creating the Future with AI Technology',
  description: 'Shanda AI Research Tokyo - A cutting-edge research institution dedicated to achieving AI self-awareness and human-AI co-evolution',
  keywords: ['AI Research', 'Artificial Intelligence', 'Tokyo', 'Self-awareness', 'Machine Learning', 'Deep Learning'],
  authors: [{ name: 'Shanda AI Research Tokyo' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neural-dark text-white min-h-screen">
        <div className="neural-grid fixed inset-0 -z-10 opacity-20"></div>
        {children}
      </body>
    </html>
  )
} 