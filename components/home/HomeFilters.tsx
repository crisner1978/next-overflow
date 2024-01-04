'use client'

import { HomePageFilters } from '@/constants/filters'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const HomeFilters = () => {
  const isActive = 'frequent'
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => {}}
          className={cn(
            'body-medium rounded-lg bg-light-800 px-6 py-3 capitalize text-light-500 shadow-none dark:bg-dark-300 dark:text-light-500 ',
            {
              'bg-primary-100 text-primary-500': isActive === filter.value,
            },
          )}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  )
}

export default HomeFilters
