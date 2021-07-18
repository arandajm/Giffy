import { ListIcon, ListItem, Link as LinkChakra } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Link } from 'wouter'
import './Category.css'

const Category = ({ name }) => (
  <Link to={`/search/${name}`} className="Category">
    <LinkChakra mr="2">
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" boxSize="4" />
        {name}
      </ListItem>
    </LinkChakra>
  </Link>
)

export default Category
