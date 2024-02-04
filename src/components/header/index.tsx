'use client'

import React, { useState, ChangeEvent, KeyboardEvent } from 'react'
import { Input } from '@/components/input'
import { Avatar, AvatarImage } from '../ui/avatar'
import { useSearch } from '@/context/searchContext'
import { Button } from '../button'
import { Dialog } from '../dialog'
import { icons } from '@/utils/icons'

const Header = () => {
  const { setSearchValue } = useSearch()
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchPokemon()
    }
  }

  const handleSearchPokemon = () => {
    setSearchValue(inputValue)
  }

  return (
    <header className="w-full flex justify-between items-center p-4">
      <h1>Poke10</h1>

      <div className="hidden md:flex w-full max-w-sm items-center space-x-2">
        <div className="w-full max-w-xl">
          <Input
            id="search"
            placeholder="Search a Pokemon..."
            icon="search"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Button className="h-[54px]" onClick={handleSearchPokemon}>
          Search
        </Button>
      </div>

      <div className="flex justify-between items-center gap-2">
        <Dialog
          onSubmit={handleSearchPokemon}
          triggerButtonLabel={icons['search']}
          submitButtonLabel="Search"
          className="block md:hidden"
        >
          <Input
            id="search"
            placeholder="Search a Pokemon..."
            icon="search"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </Dialog>
        <Avatar>
          <AvatarImage src="https://picsum.photos/40/40" />
        </Avatar>
      </div>
    </header>
  )
}

export { Header }
