'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import NavContent from './NavContent'
import UserSignedOut from './UserSignedOut'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src='/assets/icons/hamburger.svg'
          alt='menu'
          width={36}
          height={36}
          className='invert-colors sm:hidden'
        />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='background-light900_dark200 border-none'>
        <Link href='/' className='flex items-center gap-1'>
          <Image
            src='/assets/images/site-logo.svg'
            alt='Next-flow'
            width={23}
            height={23}
          />
          <p className='h2-bold text-dark100_light900 font-spaceGrotesk'>
            Dev <span className='text-primary-500'>Flow</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent isMobile className='gap-6 pb-6 pt-16' />
          </SheetClose>
          <UserSignedOut isMobile />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
