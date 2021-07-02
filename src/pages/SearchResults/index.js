import React from 'react'
import ListOfGifs from 'components/ListOfGifs'
import Spinner from 'components/Spinner'
import { useGifs } from 'hooks/useGifs'

const SearchResults = ({ params: { keyword } }) => {
  const { loading, gifs, setPage } = useGifs(keyword)

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2>Searching gifs about {keyword}</h2>
          <ListOfGifs gifs={gifs} />
          <button onClick={handleNextPage}>Get next page</button>
        </>
      )}
    </>
  )
}

export default SearchResults
