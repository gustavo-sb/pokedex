export type GetPokemons = {
  count: number
  next?: string
  previous?: string
  results: Results
}

export type Results = Array<{
  name: string
  url: string
}>
