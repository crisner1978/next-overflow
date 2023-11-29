import React from 'react'

const AutoComplete = () => {
  return (
    <div>
      
    </div>
  )
}

export default AutoComplete


// import { useAnalytics } from '@/context/AnalyticsContext'

// import { cn } from '@/utils'
// import { Combobox, Transition } from '@headlessui/react'
// import { useQuery } from '@tanstack/react-query'
// import { Frown as FaceFrownIcon, X as XMarkIcon } from 'lucide-react'
// import { Fragment, useEffect, useState } from 'react'
// import { useDebounce } from 'usehooks-ts'
// import { autoSearch } from './KeywordSearch/search-service'

// interface AutoCompleteProps extends React.HTMLAttributes<HTMLDivElement> {}

// export default function AutoComplete({ className }: AutoCompleteProps) {
//   const [inputValue, setInputValue] = useState('')
//   const [query, setQuery] = useState('')
//   const { trackEvent } = useAnalytics()
//   const debouncedQuery = useDebounce(query, 500)

//   const { data: searchResults, status } = useQuery({
//     queryKey: ['search', debouncedQuery],
//     queryFn: async () => autoSearch(debouncedQuery),
//     enabled: debouncedQuery !== '',
//     keepPreviousData: debouncedQuery !== '',
//   })

//   const results = Object.entries(searchResults || {})
//     .map(([category, items]) => ({
//       category: category.replace('vehicle.', ''),
//       items,
//     }))
//     .sort((a, b) => a.category.localeCompare(b.category))

//   console.log('results', results)

//   useEffect(() => {
//     if (debouncedQuery) {
//       trackEvent('searched AutoComplete', {
//         query: debouncedQuery,
//       })
//     }
//   }, [debouncedQuery, trackEvent])

//   return (
//     <div className={cn('relative flex flex-1 items-center justify-start max-sm:w-full', className)}>
//       <Combobox value={inputValue} onChange={(item: any) => setInputValue?.(item.name as string)}>
//         <div className="relative w-full">
//           <Combobox.Input
//             className="flex h-[52px] w-full rounded-md border !border-[#E6E6E6] bg-[#F0F6FB] px-2 py-3 leading-6 tracking-[0.2px] text-primary-text outline-none ring-ring transition-all duration-200 ease-in-out placeholder:text-[#737373] hover:bg-card focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-[44px] sm:text-sm"
//             placeholder="⌘ Search"
//             onChange={(event) => setQuery(event.target.value)}
//           />
//           {inputValue ? (
//             <div className="absolute inset-y-0 right-0 top-0 flex h-[52px] items-center px-2 sm:h-[44px]">
//               <XMarkIcon className="h-5 w-5 text-primary" />
//               <span className="sr-only">Close</span>
//             </div>
//           ) : null}
//           {results.length > 0 && (
//             <Transition
//               as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
//               leave="transition ease-in duration-100"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//               afterLeave={() => setQuery('')} // Reset the search query after the transition completes
//             >
//               <Combobox.Options
//                 static
//                 className="absolute z-10 mt-1 max-h-80 w-full scroll-pb-2 scroll-pt-11 space-y-2 overflow-auto overflow-y-auto rounded-md border border-border bg-popover bg-white py-1 pb-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
//               >
//                 {results.map((result) => (
//                   <li key={result.category}>
//                     <h2 className="bg-gray-100 px-4 py-2.5 text-xs font-semibold uppercase text-gray-900">
//                       {result.category}
//                     </h2>
//                     <ul className="mt-2 text-sm text-gray-800">
//                       {result.items.map((item: string, index: number) => (
//                         <Combobox.Option
//                           key={index}
//                           value={item}
//                           className={({ active }) =>
//                             cn('cursor-default select-none px-4 py-2', {
//                               'bg-primary text-white': active,
//                             })
//                           }
//                         >
//                           {item}
//                         </Combobox.Option>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </Combobox.Options>
//             </Transition>
//           )}

//           {query !== '' && results.length === 0 && (
//             <div className="absolute mt-1 rounded border border-border bg-popover px-6 py-14 text-center text-sm sm:px-14">
//               <FaceFrownIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
//               <p className="mt-4 font-semibold text-gray-900">No results found</p>
//               <p className="mt-2 text-gray-500">
//                 We couldn’t find anything with that term. Please try again.
//               </p>
//             </div>
//           )}
//         </div>
//       </Combobox>
//     </div>
//   )
// }
// // AutoComplete api https://listings.vin/autocomplete?q=tes
// // Search api https://listings.vin/search?q=f150

// export const makes = [
//   'Acura',
//   'Alfa Romeo',
//   'Aston Martin',
//   'Audi',
//   'Bentley',
//   'BMW',
//   'Buick',
//   'Cadillac',
//   'Chevrolet',
//   'Chrysler',
//   'Citroen',
//   'Dodge',
//   'Ferrari',
//   'Fiat',
//   'Ford',
//   'GMC',
//   'Honda',
//   'Hyundai',
//   'Infiniti',
//   'Jaguar',
//   'Jeep',
//   'Kia',
//   'Lamborghini',
//   'Land Rover',
//   'Lexus',
//   'Lincoln',
//   'Maserati',
//   'Mazda',
//   'McLaren',
//   'Mercedes-Benz',
//   'MINI',
//   'Mitsubishi',
//   'Nissan',
//   'Porsche',
//   'Ram',
//   'Rolls-Royce',
//   'Subaru',
//   'Tesla',
//   'Toyota',
//   'Volkswagen',
//   'Volvo',
// ]

// // Omit a property from a type to pass a custom onChange handler to the input
// interface InputProps extends Omit<React.ComponentProps<'input'>, 'onChange'> {
//   onChange?: (value: string) => void
// }

// type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden

// type InputsProps = OverrideProps<
//   React.ComponentProps<'input'>,
//   { onChange?: (value: string) => void }
// >

// type AutoProps = React.ComponentProps<typeof AutoComplete>
