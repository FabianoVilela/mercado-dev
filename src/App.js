import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import base from './base'
import Home from './Home'
import Categorias from './Categories'
import NovoAnuncio from './NovoAnuncio'
import Footer from './Footer'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categorias: [],
      anuncios: []
    }

    base.bindToState('categorias', {
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
    return (
      <Router>
        <div className='App'>
          <Route path='/' exact render={() => <Home categorias={this.state.categorias}/>} />
          <Route path='/novo-anuncio' exact render={() => <NovoAnuncio categorias={this.state.categorias} />} />
          <Route path='/categorias' render={() => <Categorias categorias={this.state.categorias} />} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
