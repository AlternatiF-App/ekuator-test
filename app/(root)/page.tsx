'use client'
import CardPokemon from '@/components/card-pokemon'
import Type from '@/components/type'
import { PokemonProps } from '@/interfaces/pokemon'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'

// export async function getDataPokemon() {
//   const api = 'https://pokemon.ekuator.id/pokemons?limit=10&page=1'
//   const response = await fetch(api, {
//     headers: {
//       Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Bva2Vtb24uZWt1YXRvci5pZC9sb2dpbiIsImlhdCI6MTcwNTQwMDcxNiwiZXhwIjoxNzA1NDA0MzE2LCJuYmYiOjE3MDU0MDA3MTYsImp0aSI6IlI0UDB2eXBqU25LRm93WmkiLCJzdWIiOiJjNjIyYmMzMC04YjcwLTRlMTQtYjYzOS1jY2JiYzdmOGE2OWQiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.jLR86oNnMI_V0GvUYF15AjPskPYG75EKz2LN7Z2TBro',
//     },
//     // cache: 'force-cache',
//     // next: { revalidate: 1 }
//   })
//   return response.json()
// }

const Home = () => {
  // const pokemons = await getDataPokemon()
  const [pokemons, setPokemons] = useState<any>()

  const getDataPokemons = async () => {
    await axios.get('https://pokemon.ekuator.id/pokemons?limit=10&page=1', {
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Bva2Vtb24uZWt1YXRvci5pZC9sb2dpbiIsImlhdCI6MTcwNTQwMDcxNiwiZXhwIjoxNzA1NDA0MzE2LCJuYmYiOjE3MDU0MDA3MTYsImp0aSI6IlI0UDB2eXBqU25LRm93WmkiLCJzdWIiOiJjNjIyYmMzMC04YjcwLTRlMTQtYjYzOS1jY2JiYzdmOGE2OWQiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.jLR86oNnMI_V0GvUYF15AjPskPYG75EKz2LN7Z2TBro',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,DELETE,PATCH,POST,PUT',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Header': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        'Content-Type': 'application/json',
        'Accept': '/'
      },
    })
      .then((result: any) => {
        console.log(result)
      })
  }

  useEffect(() => {
    getDataPokemons()
  }, [])

  return (
    <div className='container mx-auto py-8'>
      <Link href='/add-pokemon'>
        <button className='flex items-center bg-primary text-white font-bold p-3 rounded-lg'>
          <FaPlus className='h-6 w-6 text-white mr-2' />
          Tambah Pokemon Baru
        </button>
      </Link>
      <div className='mt-10 grid grid-cols-5 gap-6'>
        {
          pokemons?.data.map((pokemon: PokemonProps, index: number) => (
            <CardPokemon
              key={index}
              index={index}
              image={pokemon.image}
              name={pokemon.name}
              types={pokemon.types}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home
