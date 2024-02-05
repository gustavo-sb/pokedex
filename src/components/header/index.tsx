'use client'

import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react'
import { Input } from '@/components/input'
import { Avatar, AvatarImage } from '../ui/avatar'
import { useSearch } from '@/context/searchContext'
import { Button } from '../button'
import { Dialog } from '../dialog'
import { icons } from '@/utils/icons'
import logo from '../../../public/static/image/poke10-logo.svg'
import Image from 'next/image'

const Header = () => {
  const { setSearchValue } = useSearch()
  const [inputValue, setInputValue] = useState('')
  const [isLoginPage, setIsLoginPage] = useState<boolean>(false)

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

  useEffect(() => {
    const currentUrl = window.location.href

    if (currentUrl.includes('/login' || '/registration')) {
      setIsLoginPage(true)
    }
  }, [])

  return (
    <header
      data-isLoginPage={isLoginPage}
      className="w-full flex justify-between items-center p-4 data-[isLoginPage=true]:hidden"
    >
      <Image src={logo} alt="Poke10 logo" width={96} />

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

      <div className="flex justify-between items-center gap-3">
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
