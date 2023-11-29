import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return <main className='flex min-h-screen w-full items-center justify-center'>{children}</main>
}

export default Layout
