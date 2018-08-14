import React, { Component } from 'react'
import axios from 'axios'
import HomeAd from './HomeAd';

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      advertisements: {},
      isLoading: false
    }

    this.loadAdvertisements = this.loadAdvertisements.bind(this)

    this.loadAdvertisements(this.props.match.params.urlCategory)
    this.loadAdvertisements()
  }

  loadAdvertisements(urlCategory) {
    this.setState({ 
      advertisements: {},
      isLoading: true
    })

    const url = `https://mercadodev-fvs.firebaseio.com/advertisements.json?orderBy="category"&equalTo="${urlCategory}"`
    axios.get(url).then(
      res => {
        this.setState({ advertisements: res.data, isLoading: false })
        this.category = this.props.match.params.urlCategory
      }
    )
  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.urlCategory){
      if(this.category !== newProps.match.params.urlCategory)
        this.loadAdvertisements(newProps.match.params.urlCategory)
    }
  }

  render () {
    return (
      <div>
        <h1>Category: {this.props.match.params.urlCategory}</h1>
        { this.state.isLoading && <span>Loading...</span>}
        {
          !this.state.isLoading && Object.keys(this.state.advertisements).length === 0 && <span>No products</span>
        }
        <div className='row'>
          {
            Object.keys(this.state.advertisements).map(_key => {
              const advertisement = this.state.advertisements[_key]
              return <HomeAd key={_key} id={_key} advertisement={advertisement} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Category