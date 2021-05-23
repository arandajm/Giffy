import React from 'react'
import { useState } from 'react'

const Context = React.createContext({})

// Create custom Provider
export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([])
  return <Context.Provider value={{ gifs, setGifs }}>{children}</Context.Provider>
}

export default Context
