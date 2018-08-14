import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import base from './base'
import Home from './Home'
import Categories from './Categories'
import NewAdvertisement from './NewAdvertisement'
import Footer from './Footer'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }

    base.bindToState('categories', {
      context: this,
      state: 'categories'
    })
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/' exact render={() => <Home categories={this.state.categories}/>} />
          <Route path='/new' exact render={() => <NewAdvertisement categories={this.state.categories} />} />
          <Route path='/categories' render={() => <Categories categories={this.state.categories} />} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
