import Gif from '../Gif'
import './ListOfGifs.css'

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) => {
        return <Gif id={id} title={title} url={url} key={id} />
      })}
    </div>
  )
}

export default ListOfGifs
