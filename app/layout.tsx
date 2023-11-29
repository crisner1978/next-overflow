import type { Metadata } from 'next'
import { Inter, Space_Grotesk as spaceGrotesk } from 'next/font/google'
import React from 'react'
import './globals.css'
import Provider from './Provider'

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
    <Provider>
      <html lang='en'>
        <body className={`${inter.className} ${spaceG.variable}`}>
          <main>{children}</main>
        </body>
      </html>
    </Provider>
  )
}
