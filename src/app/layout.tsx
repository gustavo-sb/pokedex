import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SearchProvider } from '@/context/searchContext'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Poke10',
  description: 'App using PokéAPI'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SearchProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col h-screen text-zinc-50">
            <Header />
            <main className="w-full flex flex-1 p-4">{children}</main>
            <Toaster />
            <Footer />
          </div>
        </body>
      </html>
    </SearchProvider>
  )
}
