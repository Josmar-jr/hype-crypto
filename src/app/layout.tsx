import { ReactNode } from 'react'
import '../styles/globals.css'
import { Inter } from '@next/font/google'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-zinc-100 text-sm text-zinc-900">
        <div className="w-full">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
