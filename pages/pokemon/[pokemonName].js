import React from 'react'
import {useRouter} from 'next/router'
import Detail from '../../components/Detail'
export default function PokemonPage() {
  const router = useRouter()
  const pokemon = router.query
  return (
    <div>
      <Detail pokemonName={pokemon.pokemon} />
    </div>
  )
}
