export type TypesProps = {
  id: string,
  name: string,
}

export interface PokemonProps {
  index: number
  image: string
  name: string
  types: TypesProps[]
}