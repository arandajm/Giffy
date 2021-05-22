import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'

export function useGifs(keyword) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])
  const keywordToUse = keyword || localStorage.getItem('lastKeyword')

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getGifs(keywordToUse).then(gifs => setGifs(gifs))
      setLoading(false)
      // save the last keyword into localstorage
      localStorage.setItem('lastKeyword', keyword)
    }, 3000)
  }, [keyword])

  return { loading, gifs }
}
