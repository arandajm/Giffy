import { Box, Stack, Text } from '@chakra-ui/react'
import ListOfGifs from '../../components/ListOfGifs'
import TrendingSearches from '../../components/TrendingSearches'
import { useGifs } from '../../hooks/useGifs'

const Home = () => {
  const { gifs } = useGifs()
  return (
    <Stack d="flex" direction={{ base: 'column', md: 'row' }} justifyContent="space-evenly">
      <Box width={{ base: '100%', md: '60%' }}>
        <ListOfGifs gifs={gifs} />
      </Box>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        borderColor="linear(to-r, teal.500,green.500)"
        padding="4"
        height="fit-content"
      >
        <TrendingSearches />
      </Box>
    </Stack>
  )
}

export default Home
