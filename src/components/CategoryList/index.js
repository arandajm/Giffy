import { Link } from 'wouter'
import Category from '../Category'
import './CategoryList.css'

const CategoryList = ({ title = 'Titulo', options = [] }) => (
  <>
    <h1>{title}</h1>
    <div className="CategoryList">
      {options.map(opt => (
        <Category name={opt} />
      ))}
    </div>
  </>
)

export default CategoryList
