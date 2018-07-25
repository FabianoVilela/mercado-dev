import React, { Component } from 'react'
// import logo from './logo.svg'

import base from './base'
import HomeAd from './HomeAd'
import CategoryHome from './CategoryHome'
import HeaderHome from './HeaderHome'


class Home extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      categorias: [],
      anuncios: []
    }

    base.bindToState('anuncios',
    {
      context: this,
      state: 'anuncios',
      queries: {
        limitToLast: 3
      }
    })
  }
  render () {
    //let index = 0
    return (
      <div>
        <HeaderHome />
        <div className='container'>
          <h3>Últimos anúncios</h3>
          <div className='row'>
            {Object.keys(this.state.anuncios).map( key => {
              const anuncio = this.state.anuncios[key]
                return (
                  <HomeAd key={key} anuncio={anuncio}/>
                )
              })
            }
          </div>
          <h3>Categorias</h3>
          <div className='row'>
            {this.props.categorias.map( (cat, index) => {
              return [
                <CategoryHome key={index} categoria={cat}/>,
                ++index % 4 === 0 && <div key={'c-' + index} className='w-100'></div>
              ]
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Home