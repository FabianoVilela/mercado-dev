import React from 'react' 
import { Link } from 'react-router-dom'

const CategoryHome = ({categoria}) => {
  return (
    <Link to={`/anuncios/categoria/`} className="btn btn-secondary h-100 m-2 col-sm">
      <i className={`fas ${categoria.icon}`} aria-hidden="true"></i><br />
      {categoria.categoria}
    </Link>
  )
}

export default CategoryHome