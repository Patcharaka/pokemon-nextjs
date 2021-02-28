import React, {useState} from 'react'
import {Table, Icon, Label, Menu} from 'semantic-ui-react'
import style from '../styles/index.module.css'
import Link from 'next/Link'
import Modal from 'react-modal'
import {useRouter} from 'next/router'
import Detail from '../components/Detail'
// import {useDispatch} from 'react-redux'
// import useInterval from '../lib/useInterval'

Modal.setAppElement('#__next')

export default function index({data}) {
  const router = useRouter()
  //const dispatch = useDispatch()
  const pokemonLists = data.results
  // const [PokemonList, setPokemonList] = useState([])
  // setPokemonList(pokemonLists)
  // Tick the time every second

  return (
    <div className={style.container__table}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>No.</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell width={1}>View</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {pokemonLists.map((value, index) => {
          return (
            <Table.Body key={index}>
              <Table.Row>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>
                  <p>
                    <Link
                      href={`/?pokemonName=${value.url}`}
                      as={`/?pokemonName=${value.name}`}>
                      <a>{value.name}</a>
                    </Link>
                  </p>
                </Table.Cell>
                <Table.Cell>
                  <p>
                    <Link
                      href={`/pokemon/[pokemonName]?pokemon=${value.url}`}
                      as={`/pokemon/${value.name}`}>
                      <a>
                        <Icon name='eye' />
                      </a>
                    </Link>
                  </p>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          )
        })}
      </Table>

      {/* Display Modal Pokemon Detail */}
      <Modal
        isOpen={!!router.query.pokemonName}
        onRequestClose={() => router.push('/')}>
        <Detail pokemonName={router.query.pokemonName} />
      </Modal>
    </div>
  )
}

export async function getStaticProps({query}) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1118`)
  const data = await res.json()
  return {
    props: {
      data: data,
    },
  }
}
