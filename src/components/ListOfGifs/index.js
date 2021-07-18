import { Text } from '@chakra-ui/react'
import Gif from '../Gif'
import './ListOfGifs.css'

const ListOfGifs = ({ gifs, title = 'Ultima Busqueda!!!' }) => {
  return (
    <>
      {gifs.length > 0 && (
        <Text bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text" fontSize="3xl" fontWeight="extrabold">
          {title}
        </Text>
      )}
      <div className="ListOfGifs">
        {gifs.map(({ id, title, url }) => {
          return <Gif id={id} title={title} url={url} key={id} />
        })}
      </div>
    </>
  )
}

export default ListOfGifs
