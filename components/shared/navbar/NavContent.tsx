'use client'

import { SheetClose } from '@/components/ui/sheet'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavContentProps {
  className?: string
  isMobile?: boolean
}

const NavContent = ({ className, isMobile }: NavContentProps) => {
  const pathname = usePathname()

  return (
    <div className={cn('flex h-full flex-col', className)}>
      {sidebarLinks.map((link) => {
        const isActive =
          pathname === link.route || pathname?.includes(link.route)
        return (
          <React.Fragment key={link.route}>
            {isMobile ? (
              <SheetClose asChild key={link.route}>
                <NavLink link={link} isActive={isActive} key={link.route} />
              </SheetClose>
            ) : (
              <NavLink
                link={link}
                isActive={isActive}
                key={link.route}
                desktop
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default NavContent

function NavLink({
  link,
  isActive,
  desktop,
}: {
  link: any
  isActive: boolean
  desktop?: boolean
}) {
  return (
    <Link
      href={link.route}
      className={cn(
        'text-dark300_light900 flex items-center justify-start bg-transparent gap-4 p-4 rounded-lg hover:bg-light-800 dark:hover:bg-dark-300',
        {
          'primary-gradient rounded-lg text-light-900': isActive,
        }
      )}>
      <Image
        src={link.imgURL}
        alt={link.label}
        width={20}
        height={20}
        className={`${isActive ? '' : 'invert-colors'}`}
      />
      <p
        className={`${isActive ? 'base-bold' : 'base-medium'} ${
          desktop && 'max-lg:hidden'
        }`}>
        {link.label}
      </p>
    </Link>
  )
}
