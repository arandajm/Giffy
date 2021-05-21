import './Gif.css'

const Gif = ({ title, url }) => {
  return (
    <div className="Gif">
      <div className="Gif-link">
        <h4>{title}</h4>
        <img loading="lazy" alt={title} src={url} />
      </div>
    </div>
  )
}

export default Gif
