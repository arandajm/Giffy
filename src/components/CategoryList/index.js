import { List, Text } from '@chakra-ui/react'
import Category from '../Category'
import './CategoryList.css'

const CategoryList = ({ title = 'Titulo', options = [] }) => (
  <>
    <Text bgGradient="linear(to-r, teal.500,green.500)" bgClip="text" fontSize="3xl" fontWeight="extrabold">
      {title}
    </Text>
    <List
      spacing={3}
      d="flex"
      flexDirection={{ base: 'row', md: 'column' }}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      justifyContent="center"
      alignItems="baseline"
    >
      {options.map(opt => (
        <Category name={opt} key={opt} />
      ))}
    </List>
  </>
)

export default CategoryList
