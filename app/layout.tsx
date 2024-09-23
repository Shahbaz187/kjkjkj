import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { ThemeProvider } from './theme-context'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import './globals.css'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ASHMAL RANA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <ThemeSwitcher />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
