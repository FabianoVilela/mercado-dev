import React, { Component } from 'react'

import { Grid, List } from 'semantic-ui-react'

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
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={2}>
              <h3>Categories</h3>
              <List divided>
                {this.props.categories.map( (category, key) => {
                  return [
                    <LinkCategory key={key} category={category}/>,
                    ++index % 4 === 0 && <div key={'c-' + key}></div>
                  ]
                })}
              </List>
            </Grid.Column>
            <Grid.Column width={14}>
              <h3>Last advertisements</h3>
              {Object.keys(this.state.advertisements).map( key => {
                const advertisement = this.state.advertisements[key]
                  return (
                    <HomeAd key={key} id={key} advertisement={advertisement}/>
                  )
                })
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Home