import React from 'react'
import {Table, Icon, Label, Menu} from 'semantic-ui-react'
import style from '../styles/index.module.css'
import Link from 'next/Link'
import Modal from 'react-modal'
import {useRouter} from 'next/router'
import Detail from '../components/Detail'
import ReactPaginate from 'react-paginate'
Modal.setAppElement('#__next')

export default function index({data}) {
  const router = useRouter()
  console.log(data)
  const pokemonLists = data.results
  const count = data.count / 5
  const next = data.next

  // const paginateHandler = (selected) => {
  // let selected = selected
  // let offset = Math.ceil(selected)
  //}
  return (
    <div className={style.container__table}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>No.</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
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
                      as={`/pokemon/${value.url}`}>
                      <a>{value.name}</a>
                    </Link>
                  </p>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          )
        })}
      </Table>
      {/* <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakClassName={'break-me'}
        activeClassName={'active'}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        initialPage={1}
        pageCount={5} //page count
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={paginateHandler}
      /> */}

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
  // const page = query.page || 5
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1118`)
  const data = await res.json()
  return {
    props: {
      data: data,
    },
  }
}
