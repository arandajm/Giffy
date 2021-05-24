import { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import TrendingSearches from '../../components/TrendingSearches'
import { useGifs } from '../../hooks/useGifs'

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const { gifs } = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={evt => setKeyword(evt.target.value)} />
      </form>
      <h2>Ultima Busqueda!!</h2>
      <ListOfGifs gifs={gifs} />
      <TrendingSearches />
    </>
  )
}

export default Home
