import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Advertisement from './HomeAd'

class Category extends Component {
  constructor(props) {
    super(props)
    this.loadAnuncios = this.loadAnuncios.bind(this)

    this.state = {
      anuncios: {}
    }

    this.loadAnuncios(this.props.match.params.urlCategoria)
  }

  loadAnuncios(urlCategoria) {
    const url = `https://mercadodev-fvs.firebaseio.com/anuncios.json?orderBy="categoria"&equalTo="${urlCategoria}"`
    axios.get(url).then(
      res => {
        this.setState({ anuncios: res.data })
        this.categoria = this.props.match.params.urlCategoria
      }
    )
  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.urlCategoria){
      if(this.categoria !== newProps.match.params.urlCategoria)
        this.loadAnuncios(newProps.match.params.urlCategoria)
    }
  }

  render () {
    return (
      <div>
        <h1>Categoria: {this.props.match.params.urlCategoria}</h1>
        { Object.keys(this.state.anuncios).map( key => {
          return (<Advertisement key={key} id={key} anuncio={ this.state.anuncios[key] } />) })
        }
      </div>
    )
  }
}

export default Category