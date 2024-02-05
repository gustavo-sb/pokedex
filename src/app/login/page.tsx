'use client'

import { Button } from '@/components/button'
import { Carousel } from '@/components/carousel'
import { Input } from '@/components/input'
import api from '@/services/api'
import { ICredentials } from '@/types/credentials'
import { Pokemon } from '@/types/pokemon'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Checkbox } from '@/components/checkbox'

export default function Login() {
  const { register } = useForm<ICredentials>()

  const [data, setData] = useState<Pokemon[]>([])
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const fetchPokemons = async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1200))

    const pokemonsNames = ['pikachu', 'bulbasaur', 'charmander', 'squirtle']

    const pokemons = await Promise.all(
      pokemonsNames.map(async (pokemon: string) => {
        const { data } = await api.get<Pokemon>(`/pokemon/${pokemon}`)

        return data
      })
    )

    setData((prevData) => [...prevData, ...pokemons])
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-3/5 flex flex-col md:flex-row justify-center md:justify-around items-center">
        <Carousel pokemons={data} />
        <div className="w-96 flex flex-col justify-between items-center gap-3">
          <Input
            icon="user"
            type="email"
            placeholder="E-mail"
            {...register('email')}
          />
          <div className="w-full">
            <Input
              icon="key"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password')}
            />
            <div className="flex items-center mt-2 gap-2">
              <Checkbox
                id="show-password"
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="show-password">Show password</label>
            </div>
          </div>
          <Button className="w-full">Entrar</Button>
        </div>
      </div>
    </div>
  )
}
