import { Link } from 'wouter'
import './Category.css'

const Category = ({ name }) => (
  <Link to={`/search/${name}`} className="Category">
    <a>{name}</a>
  </Link>
)

export default Category
