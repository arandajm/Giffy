import { useContext } from 'react'
import GifsContext from '../context/GifsContext'

// Create custom hook to get gifs from context
export default function useGlobalGifs() {
  return useContext(GifsContext).gifs
}
