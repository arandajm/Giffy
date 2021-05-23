import React from 'react'
import Gif from '../../components/Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'

const Detail = ({ params: { id } }) => {
  const gifs = useGlobalGifs()
  const { title, url } = gifs.find(g => g.id === id)
  return (
    <>
      <h1>Detail for id {id}</h1>
      <Gif id={id} title={title} url={url} key={id} />
    </>
  )
}

export default Detail
