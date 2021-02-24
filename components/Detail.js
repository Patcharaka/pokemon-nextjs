import React from 'react'
import useSWR from 'SWR'
import {Image, Item, Header} from 'semantic-ui-react'

const fetchPokemonName = (pokemonName) =>
  fetch(`${pokemonName}`).then((response) => response.json())

export default function detail({pokemonName}) {
  const {data, error} = useSWR(pokemonName, fetchPokemonName)
  if (error) return <div>No rates today</div>
  if (!data) return <div>Loading... wait patiently</div>

  return (
    <div>
      <Item.Group>
        <Item>
          <Item.Image
            size='large'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data?.id}.svg`}
          />
          <Item.Content>
            <Item.Header>
              {' '}
              <Header as='h1'>{data?.name}</Header>
            </Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Item.Extra>height :{data?.height}</Item.Extra>
              <Item.Extra>weight :{data?.weight}</Item.Extra>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  )
}
