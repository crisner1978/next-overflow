import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'primary-gradient',
          footerActionLink: 'primary-text-gradient hover:text-primary-500',
        },
      }}>
      {children}
    </ClerkProvider>
  )
}

export default Provider
