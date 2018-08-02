import React from 'react'
import { Route, Link } from 'react-router-dom'

import HeaderInterno from './HeaderInterno';
import Category from './Category'

const Categorias = (props) => {
  return(
    <div>
      <HeaderInterno />
      <h1>Categorias</h1>
      <div>
        <ul>
          {props.categorias.map(
            cat => {
              return (
                <li key={cat.url}>
                  <Link to={`/categorias/${cat.url}`}>{cat.categoria}</Link>
                </li>
              )
            }
          )}
        </ul>
      </div>
      <div>
          <Route exact path='/categorias/:urlCategoria' component={Category} />
          <Route path='/categorias/:urlCategoria/:idAnuncio' render={() => <h1>Anuncio</h1>} />
      </div>
    </div>
  )
}

export default Categorias