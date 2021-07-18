import React from 'react'
import { Text } from '@chakra-ui/react'
import Gif from '../../components/Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'

const Detail = ({ params: { id } }) => {
  const gifs = useGlobalGifs()
  const { title, url } = gifs.find(g => g.id === id)
  return (
    <>
      <Text bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text" fontSize="3xl" fontWeight="extrabold">
        {`Detail for id ${id}`}
      </Text>
      <Gif id={id} title={title} url={url} key={id} />
    </>
  )
}

export default Detail
