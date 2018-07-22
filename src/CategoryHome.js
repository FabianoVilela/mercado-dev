import React from 'react' 

const CategoryHome = ({categoria}) => {
  return (
    <a to={`/anuncios/categoria/`} className="btn btn-secondary h-100 m-2 col-sm">
      <i className={`fas ${categoria.icon}`} aria-hidden="true"></i><br />
      {categoria.categoria}
    </a>
  )
}

export default CategoryHome