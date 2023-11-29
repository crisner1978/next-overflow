import React from 'react'

const SearchInput = () => {
  return (
    <div>
      
    </div>
  )
}

export default SearchInput


// import { cn } from '@/utils'
// import { Combobox, Transition } from '@headlessui/react'
// import { Frown as FaceFrownIcon, X as XMarkIcon } from 'lucide-react'
// import { Fragment, KeyboardEvent, memo, useCallback, useEffect, useRef } from 'react'
// import useSearchService from './KeywordSearch/useSearchService'
// import useSuggestions from './useSuggestions'

// export interface SearchInputProps {
//   className?: string
// }

// const SearchInput = memo(({ className }: SearchInputProps) => {
//   const { data, inputValue, isSuccess, query, handleClearSearch, handleComboChange, setQuery } =
//     useSearchService()
//   const {} = useSuggestions()
//   const searchRef = useRef<HTMLInputElement>(null)

//   useEffect(() => {}, [searchRef])

//   const findSuggestions = useCallback(() => {
//     if (searchRef.current) {
//       console.log('current baby')
//     }
//   }, [searchRef])

//   return (
//     <div className={cn('relative flex flex-1 items-center justify-start max-sm:w-full', className)}>
//       <Combobox value={inputValue} onChange={handleComboChange}>
//         <div className="relative w-full">
//           <Combobox.Input
//             ref={searchRef}
//             onFocus={() => findSuggestions()}
//             onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
//               if (e.key === 'Enter') {
//                 console.log('enter')
//               }
//             }}
//             autoComplete="off"
//             className="flex h-[52px] w-full rounded-md border !border-[#E6E6E6] bg-[#F0F6FB] px-2 py-3 leading-6 tracking-[0.2px] text-primary-text outline-none ring-ring transition-all duration-200 ease-in-out placeholder:text-[#737373] hover:bg-card focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-[44px] sm:text-sm"
//             placeholder="⌘ Search"
//             onChange={(event) => {
//               event.preventDefault()
//               event.stopPropagation()
//               setQuery(event.target.value)
//             }}
//           />
//           {inputValue && (
//             <div
//               className="absolute inset-y-0 right-0 top-0 flex h-[52px] cursor-pointer items-center px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:h-[44px]"
//               onClick={handleClearSearch}
//             >
//               <XMarkIcon className="h-5 w-5 text-primary" />
//               <span className="sr-only">Close</span>
//             </div>
//           )}
//           {isSuccess && (
//             <Transition
//               as={Fragment}
//               leave="transition ease-in duration-100"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//               afterLeave={() => setQuery('')}
//             >
//               <Combobox.Options
//                 static
//                 className="absolute z-10 mt-1 max-h-80 w-full scroll-pb-2 scroll-pt-11 space-y-2 overflow-auto overflow-y-auto rounded-md border border-border bg-popover bg-white py-1 pb-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
//               >
//                 {data?.map(({ result }, index) => (
//                   <Combobox.Option
//                     dangerouslySetInnerHTML={{ __html: result }}
//                     key={index}
//                     value={result}
//                     className={({ active }) =>
//                       cn('cursor-default select-none px-4 py-2 text-gray-800', {
//                         'bg-primary text-white': active,
//                       })
//                     }
//                   />
//                 ))}
//               </Combobox.Options>
//             </Transition>
//           )}

//           {query !== '' && data?.length === 0 && (
//             <div className="absolute z-10 mt-1 rounded border border-border bg-popover px-6 py-14 text-center text-sm sm:px-14">
//               <FaceFrownIcon className="mx-auto h-6 w-6 text-input/90" aria-hidden="true" />
//               <p className="mt-4 font-semibold text-primary-detail">No results found</p>
//               <p className="mt-2 text-secondary">
//                 We couldn’t find anything with that term. Please try again.
//               </p>
//             </div>
//           )}
//         </div>
//       </Combobox>
//     </div>
//   )
// })

// SearchInput.displayName = 'SearchInput'
// export default SearchInput

// // need to update the followin on search selection or enter
// // 1. track the search event
// // 2. close the search dropdown
// // 3. parse the selected result of any <b> tags
// // 4. build the url from the selected result
// // 5. navigate to the selected result
// // 6. ensure the url and sidebar are updated by the selected result and navigation

// // onSelect={(value) => {
// //   track('clicked cmdk result', {
// //   ...(result._type === 'module'
// //       ? {
// //        moduleType: result.moduleType,
// //         }
// //          : {}),
// //          type: result._type,
// //         slug: result.slug.current,F
// //       })
// //        setOpen(false)
// //        router.push(value)
// //       }}
