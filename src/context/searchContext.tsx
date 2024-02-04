'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

type SearchProvider = {
  children: ReactNode
}

type SearchContext = {
  search: string | null
  setSearchValue: (search: string) => void
}

const SearchContext = createContext({} as SearchContext)

export const useSearch = () => {
  return useContext(SearchContext)
}

export const SearchProvider = ({ children }: SearchProvider) => {
  const [search, setSearch] = useState<string | null>(null)

  const setSearchValue = (search: string) => {
    setSearch(search)
  }

  return (
    <SearchContext.Provider value={{ search, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  )
}
