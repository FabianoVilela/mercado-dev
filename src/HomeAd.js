import React from 'react'
import { Link } from 'react-router-dom'

const HomeAd = ({id, advertisement}) => {
  return (
    <div className='col-lg-4 col-md-6 mb-4'>
      <div className='card h-100'>
        <Link to={`/categories/${advertisement.category}/${id}`}><img className='card-img-top' src={advertisement.photo} alt={advertisement.name} /></Link>
        <div className='card-body'>
          <h4 className='card-title'>
            <Link to={`/categories/${advertisement.category}/${id}`}>{advertisement.name}</Link>
          </h4>
          <h5>{advertisement.price}</h5>
          <p className='card-text'>{advertisement.description}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeAd