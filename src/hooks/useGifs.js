import { useState, useEffect, useContext } from 'react'
import GifsContext from '../context/GifsContext'
import getGifs from '../services/getGifs'
const INITIAL_PAGE = 0
export function useGifs(keyword) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
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

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs(keywordToUse, page).then(newGifs => setGifs(prevGifs => [...prevGifs, ...newGifs]))
    setLoadingNextPage(false)
  }, [keyword, page, setGifs])

  return { loading, loadingNextPage, gifs, setPage }
}
