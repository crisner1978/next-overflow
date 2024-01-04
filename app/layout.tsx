import type { Metadata } from 'next'
import { Inter, Space_Grotesk as spaceGrotesk } from 'next/font/google'
import React from 'react'
import './globals.css'
import { ThemeProvider } from './ThemeProvider'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceG = spaceGrotesk({
  subsets: ['latin'],
  variable: '--font-spaceGrotesk',
})

export const metadata: Metadata = {
  title: 'Next Overflow',
  authors: [{ name: '@crisner1978' }],
  description: 'Dev platform for the next generation of web devs.',
}
type OwnProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: OwnProps) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${spaceG.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: 'primary-gradient',
              footerActionLink: 'primary-text-gradient hover:text-primary-500',
            },
          }}>
          <ThemeProvider>
            <main>{children}</main>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
