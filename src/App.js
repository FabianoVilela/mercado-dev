import React, { Component } from 'react'
import logo from './logo.svg'

import HeaderHome from './HeaderHome'
import HomeAd from './HomeAd'
import CategoryHome from './CategoryHome'
import Footer from './Footer'
import base from './base'

class App extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      categorias: [],
      anuncios: []
    }

    base.bindToState('categorias',
    {
      context: this,
      state: 'categorias'
    })

    base.bindToState('anuncios',
    {
      context: this,
      state: 'anuncios',
      queries: {
        limitToLast: 3
      }
    })
  }
  render() {
    let index = 0

    return (
      <div className='App'>
        <HeaderHome />
        <div className='container'>
          <h3>Últimos anúncios</h3>
          <div className='row'>
          {this.state.anuncios.map( (anuncio, index) => {
              return [
                <HomeAd key={index} anuncio={anuncio}/>,
                ++index % 4 === 0 && <div key={'a-' + index} className='w-100'></div>
              ]
            })}          </div>
          <h3>Categorias</h3>
          <div className='row'>
            {this.state.categorias.map( (cat, index) => {
              return [
                <CategoryHome key={index} categoria={cat}/>,
                ++index % 4 === 0 && <div key={'c-' + index} className='w-100'></div>
              ]
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
