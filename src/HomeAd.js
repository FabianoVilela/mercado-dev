import React from 'react'
import { Link } from 'react-router-dom'

const HomeAd = ({id, anuncio}) => {
  return (
    <div className=''>
      <div className=''>
        <Link to={`/anuncios/ver/${anuncio.categoria}/${id}`}><img className='' src={anuncio.foto} alt='' /></Link>
        <div className=''>
          <h4 className=''>
            <Link to={`/anuncios/ver/${anuncio.categoria}/${id}`}>{anuncio.nome}</Link>
          </h4>
          <h5>{anuncio.preco}</h5>
          <p className=''>{anuncio.descricao}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeAd