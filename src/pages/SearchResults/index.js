import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'

const SearchResults = ({ params: { keyword } }) => {
  return (
    <>
      <h2>Searching gifs about {keyword}</h2>
      <ListOfGifs keyword={keyword} />
    </>
  )
}

export default SearchResults
