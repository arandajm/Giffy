import React from 'react'
import { Button } from '@chakra-ui/react'
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
          <ListOfGifs gifs={gifs} title={`Searching gifs about ${keyword}`} />
          <Button colorScheme="blue" size="lg" onClick={handleNextPage}>
            Get next page
          </Button>
        </>
      )}
    </>
  )
}

export default SearchResults
