import React, { Component } from 'react'
// import logo from './logo.svg'

import base from './base'
import HomeAd from './HomeAd'
import LinkCategory from './LinkCategory'
import HeaderMain from './HeaderMain'


class Home extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      advertisements: []
    }

    base.bindToState('advertisements',
    {
      context: this,
      state: 'advertisements',
      queries: {
        limitToLast: 3
      }
    })
  }
  render () {
    let index = 0
    return (
      <div>
        <HeaderMain />
        <div className='container'>
          <h3>Last advertisements</h3>
          <div className='row'>
            {Object.keys(this.state.advertisements).map( key => {
              const advertisement = this.state.advertisements[key]
                return (
                  <HomeAd key={key} id={key} advertisement={advertisement}/>
                )
              })
            }
          </div>
          <h3>Categories</h3>
          <div className='row'>
            {this.props.categories.map( (category, key) => {
              return [
                <LinkCategory key={key} category={category}/>,
                ++index % 4 === 0 && <div key={'c-' + key} className='w-100'></div>
              ]
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Home