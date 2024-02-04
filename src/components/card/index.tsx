import { Pokemon } from '@/types/pokemon'
import { Card as ShadcnCard, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'

interface Props {
  pokemon: Pokemon
}

const Card = ({ pokemon }: Props) => {
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ShadcnCard>
      <CardContent>
        {showSkeleton ? (
          <div className="w-full flex flex-col justify-between gap-2">
            <Skeleton className="w-full h-64 mt-6 rounded-lg" />
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-full h-6" />
          </div>
        ) : (
          <div className="w-full flex flex-col justify-between gap-2">
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              className="w-full mt-6 rounded-lg"
            />
            <h2>{pokemon.name}</h2>
            <div className="w-full flex items-center gap-1">
              {pokemon.types.map(({ type }) => (
                <Badge>{type.name}</Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </ShadcnCard>
  )
}

export { Card }
