import React, { Component } from 'react'

import base, { storage } from './base'
import Header from './Header'
import { Redirect } from 'react-router-dom'

class NewAdvertisement extends Component {
  constructor (props) {
    super(props)
    this.state = {
      success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    const file = this.refs.foto.files[0]
    const { name } = file
    const ref = storage.ref(name)
    ref.put(file).then(
      img => { 
        const newAdvertisement = {
          name: this.refs.name.value,
          description: this.refs.description.value,
          price: this.refs.price.value,
          telephone: this.refs.telephone.value,
          seller: this.refs.vendedor.value,
          photo: img.metadata.downloadURLs[0],
          category: this.refs.category.value
        }
        base.push('advertisements', {
          data: newAdvertisement
        })
        .then(() => {
          this.setState({ success: true })
        })
      }
    )
    e.preventDefault()
  }
  render () {
    return(
      <div>
        { this.state.success && <Redirect to='/' /> }
        <Header />
        <div className='container mt-4'>
          <h1>New advertisement</h1>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='nome'>Foto</label>
              <input type='file' className='form-control' id='foto' ref='foto' />
            </div>      
            <div className='form-group'>
                <label htmlFor='category'>Categories</label>
                <select className='form-control' id='category' ref='categoria' >
                  {this.props.categories.map( cat => 
                      <option key={cat.url} value={cat.url}>{cat.categoria}</option> 
                  )}
                </select>
            </div>   
            <div className='form-group'>
              <label htmlFor='nome'>Name</label>
              <input type='text' className='form-control' id='nome' ref='nome' />
            </div>
            <div className='form-group'>
              <label htmlFor='nome'>Description</label>
              <textarea className='form-control' id='description' ref='description' />
            </div>
            <div className='form-group'>
              <label htmlFor='price'>Price</label>
              <input type='text' className='form-control' id='price' ref='price' />
            </div>
            <div className='form-group'>
              <label htmlFor='telephone'>Telephone</label>
              <input type='text' className='form-control' id='telephone' ref='telephone' />
            </div>
            <div className='form-group'>
              <label htmlFor='vendedor'>Seller</label>
              <input type='text' className='form-control' id='vendedor' ref='vendedor' />
            </div>
            <button type="submit" className='btn btn-primary'>Save</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewAdvertisement