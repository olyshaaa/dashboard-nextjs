import { Inter } from 'next/font/google'
import './ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Admin Dashboard',
  description: 'Next.js dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
