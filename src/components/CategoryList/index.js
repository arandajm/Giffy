import { List } from '@chakra-ui/react'
import Category from '../Category'
import './CategoryList.css'

const CategoryList = ({ title = 'Titulo', options = [] }) => (
  <>
    <h1>{title}</h1>
    <List spacing={3}>
      {options.map(opt => (
        <Category name={opt} key={opt} />
      ))}
    </List>
  </>
)

export default CategoryList
