import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import NovoAnuncio from './NovoAnuncio'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/' exact component={Home} />
          <Route path='/novo-anuncio' exact component={NovoAnuncio} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
