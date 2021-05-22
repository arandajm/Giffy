import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import Spinner from '../../components/Spinner'
import { useGifs } from '../../hooks/useGifs'

const SearchResults = ({ params: { keyword } }) => {
  const { loading, gifs } = useGifs(keyword)
  return (
    <>
      <h2>Searching gifs about {keyword}</h2>
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
    </>
  )
}

export default SearchResults
