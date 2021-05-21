import { useState, useEffect } from 'react'
import Gif from '../Gif'
import getGifs from '../../services/getGifs'
import logo from '../../../src/loading.svg'
import './ListOfGifs.css'

const ListOfGifs = ({ keyword }) => {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getGifs(keyword).then((gifs) => setGifs(gifs))
      setLoading(false)
    }, 3000)
  }, [keyword])

  if (loading) return <img src={logo} alt="logo" />
  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) => {
        return <Gif id={id} title={title} url={url} key={id} />
      })}
    </div>
  )
}

export default ListOfGifs
