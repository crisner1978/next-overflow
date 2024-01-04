import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserSignedOut = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <SignedOut>
      <div className='flex flex-col gap-3'>
        {isMobile ? (
          <>
            <SheetClose asChild>
              <Link href='/sign-in'>
                <Button className='small-medium btn-secondary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                  <span className='primary-text-gradient'>Login</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href='/sign-up'>
                <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                  Signup
                </Button>
              </Link>
            </SheetClose>
          </>
        ) : (
          <>
            <Link href='/sign-in'>
              <Button className='small-medium btn-secondary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                <Image
                  src='/assets/icons/account.svg'
                  alt='login'
                  width={20}
                  height={20}
                  className='invert-colors lg:hidden'
                />
                <span className='primary-text-gradient max-lg:hidden'>
                  Login
                </span>
              </Button>
            </Link>
            <Link href='/sign-up'>
              <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                <Image
                  src='/assets/icons/sign-up.svg'
                  alt='sign up'
                  width={20}
                  height={20}
                  className='invert-colors lg:hidden'
                />
                <span className='max-lg:hidden'>Signup</span>
              </Button>
            </Link>
          </>
        )}
      </div>
    </SignedOut>
  )
}

export default UserSignedOut
