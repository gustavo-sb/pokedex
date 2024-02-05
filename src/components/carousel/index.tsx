import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Pokemon } from '@/types/pokemon'
import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'

interface Props {
  pokemons: Pokemon[]
}

const Carousel = ({ pokemons }: Props) => {
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ShadcnCarousel className="w-full max-w-xs">
      <CarouselContent>
        {pokemons.map((pokemon, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              {showSkeleton ? (
                <Skeleton className="w-full max-w-xs h-full rounded-lg" />
              ) : (
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img
                      src={
                        pokemon.sprites.other['official-artwork'].front_default
                      }
                      alt={pokemon.name}
                    />
                  </CardContent>
                </Card>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-yellow-400 text-zinc-50 border-yellow-400" />
      <CarouselNext className="bg-yellow-400 text-zinc-50 border-yellow-400" />
    </ShadcnCarousel>
  )
}

export { Carousel }
