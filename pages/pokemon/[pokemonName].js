import React from 'react'
import {useRouter} from 'next/router'
import Detail from '../../components/Detail'
export default function PokemonPage() {
  const router = useRouter()
  const {pokemonName} = router.query
  return (
    <div>
      <Detail pokemonName={pokemonName} />
    </div>
  )
}
