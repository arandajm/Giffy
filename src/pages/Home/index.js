import { Box, VStack } from '@chakra-ui/react'
import ListOfGifs from '../../components/ListOfGifs'
import TrendingSearches from '../../components/TrendingSearches'
import { useGifs } from '../../hooks/useGifs'

const Home = () => {
  const { gifs } = useGifs()
  return (
    <VStack d="flex" direction="row">
      <Box>
        <h2>Ultima Busqueda!!</h2>
        <ListOfGifs gifs={gifs} />
      </Box>
      <Box>
        <TrendingSearches />
      </Box>
    </VStack>
  )
}

export default Home
