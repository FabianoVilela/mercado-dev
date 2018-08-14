import React from 'react' 
import { Link } from 'react-router-dom'

const LinkCategory = ({category}) => {
  return (
    <Link to={`/categories/${category.url}`} className="btn btn-secondary h-100 m-2 col-sm">
      <i className={`fas ${category.icon}`} aria-hidden="true"></i><br />
      {category.name}
    </Link>
  )
}

export default LinkCategory
