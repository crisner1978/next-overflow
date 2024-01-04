import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'

interface MetricProps extends React.HTMLAttributes<HTMLParagraphElement> {
  imgUrl: string
  alt: string
  value: number | string
  title: string
  href?: string
  isAuthor?: boolean
}

const Metric = ({ className, alt, href, imgUrl, isAuthor, title, value }: MetricProps) => {
  const metricContent = useMemo(
    () => (
      <>
        <Image
          src={imgUrl}
          alt={alt}
          width={16}
          height={16}
          className={cn('object-contain', {
            'rounded-full': href,
          })}
        />
        <p className={cn('flex items-center gap-1', className)}>
          {value}
          <span
            className={cn('small-regular line-clamp-1', {
              'max-sm:hidden': isAuthor,
            })}
          >
            {title}
          </span>
        </p>
      </>
    ),
    [alt, className, href, imgUrl, isAuthor, title, value],
  )
  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center flex-wrap gap-1">{metricContent}</div>
  )
}

export default Metric
