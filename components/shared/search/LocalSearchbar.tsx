'use client'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface LocalSearchbarProps {
  route: string
  iconPosition: 'left' | 'right'
  imgSrc: string
  placeholder: string
  otherClasses?: string
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchbarProps) => {
  return (
    <div
      className={cn(
        'background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4',
        otherClasses
      )}>
      <Image
        src={imgSrc}
        alt='search'
        width={24}
        height={24}
        className={cn('cursor-pointer', {
          hidden: iconPosition !== 'left',
        })}
      />
      <Input
        type='text'
        placeholder={placeholder}
        onChange={() => {}}
        value=''
        className='paragraph-regular no-focus background-light800_darkgradient border-none shadow-none outline-none'
      />
      <Image
        src={imgSrc}
        alt='search'
        width={24}
        height={24}
        className={cn('cursor-pointer', {
          hidden: iconPosition !== 'right',
        })}
      />
    </div>
  )
}

export default LocalSearchbar
