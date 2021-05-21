import { useState } from 'react'
import { useLocation } from 'wouter'

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        onChange={(evt) => setKeyword(evt.target.value)}
      />
    </form>
  )
}

export default Home
