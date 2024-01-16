import Image from 'next/image'
import Type from './type'
import { TypesProps } from '@/interfaces/pokemon'

const CardPokemon = ({
  index,
  image,
  name,
  types
}: {
  index: number
  image: string
  name: string
  types: TypesProps[]
}) => {
  return (
    <div className='px-9 py-4 shadow-base rounded-2xl'>
      <span className='text-secondary text-2xl font-semibold'>#{ index + 1 }</span>
      <Image
        src={image}
        alt={name}
        title={name}
        height={198}
        width={198}
        className='mx-auto'
      />
      <h1 className='text-primary text-center text-2xl font-semibold'>
        { name }
      </h1>
      <div className='flex justify-center space-x-3 mt-7'>
        {
          types.map((type: any, index: number) => (
            <Type key={index} name={type.name} />
          ))
        }
      </div>
    </div>
  )
}

export default CardPokemon
