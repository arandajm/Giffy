import { ListIcon, ListItem } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { Link } from 'wouter'
import './Category.css'

const Category = ({ name }) => (
  <Link to={`/search/${name}`} className="Category">
    <a>
      <ListItem>
        <ListIcon as={StarIcon} color="green.500" />
        {name}
      </ListItem>
    </a>
  </Link>
)

export default Category
