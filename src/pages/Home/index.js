import { Box, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import TrendingSearches from '../../components/TrendingSearches'
import { useGifs } from '../../hooks/useGifs'

const Home = () => {
  // const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const { gifs } = useGifs()

  // const handleSubmit = evt => {
  //   evt.preventDefault()
  //   pushLocation(`/search/${keyword}`)
  // }
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={evt => setKeyword(evt.target.value)} />
      </form> */}
      <VStack d="flex" direction="row">
        <Box>
          <h2>Ultima Busqueda!!</h2>
          <ListOfGifs gifs={gifs} />
        </Box>
        <Box>
          <TrendingSearches />
        </Box>
      </VStack>
    </>
  )
}

export default Home
