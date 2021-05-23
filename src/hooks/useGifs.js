import { useState, useEffect, useContext } from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../services/getGifs'

export function useGifs(keyword) {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  console.log('gifs: ', gifs)
  // get current keyword or last keyword from localstorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword')

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getGifs(keywordToUse).then(gifs => setGifs(gifs))
      setLoading(false)
      // save the last keyword into localstorage
      localStorage.setItem('lastKeyword', keyword)
    }, 3000)
  }, [keyword, setGifs])

  return { loading, gifs }
}
