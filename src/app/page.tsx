'use client'

import { Card } from '@/components/card'
import { Spinner } from '@/components/spinner'
import { useSearch } from '@/context/searchContext'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import api from '@/services/api'
import { Pokemon } from '@/types/pokemon'
import { GetPokemons } from '@/types/pokemons'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Home() {
  const { search } = useSearch()

  const [data, setData] = useState<Pokemon[]>([])

  const { toast } = useToast()

  const fetchPokemons = async (offset: number = 0) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1200))

    let endpoint = `/pokemon?offset=${offset}`

    if (search) {
      endpoint = `/pokemon/${search}`

      await api
        .get<Pokemon>(endpoint)
        .then(({ data }) => {
          setData((prevData) => [...prevData, data])
        })
        .catch(() => {
          toast({
            title: 'Pokemon not found',
            description: "Please write the correct Pokemon's name.",
            variant: 'destructive',
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            )
          })

          return
        })

      return
    }

    const { data } = await api.get<GetPokemons>(endpoint)

    const pokemons = await Promise.all(
      data.results.map(async (result: any) => {
        const { data } = await api.get<Pokemon>(`/pokemon/${result.name}`)

        return data
      })
    )

    setData((prevData) => [...prevData, ...pokemons])
  }

  useEffect(() => {
    setData([])
    fetchPokemons()
  }, [search])

  return (
    <div className="w-full">
      <InfiniteScroll
        dataLength={data.length}
        next={() => fetchPokemons(data.length + 20)}
        hasMore={(!search && data.length < 1126) || data.length == 0}
        loader={
          <div className="w-full p-20 flex justify-center items-center">
            <Spinner />
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {data.map((item) => (
            <Card pokemon={item} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}
