import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Advertisement from './HomeAd'

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anuncios: {},
      isLoading: false
    }

    this.loadAnuncios = this.loadAnuncios.bind(this)

    this.loadAnuncios(this.props.match.params.urlCategoria)
  }

  loadAnuncios(urlCategoria) {
    this.setState({ 
      anuncios: {},
      isLoading: true
    })

    const url = `https://mercadodev-fvs.firebaseio.com/anuncios.json?orderBy="categoria"&equalTo="${urlCategoria}"`
    axios.get(url).then(
      res => {
        this.setState({ anuncios: res.data, isLoading: false })
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
        { this.state.isLoading && <span>Loading...</span>}
        {
          !this.state.isLoading && Object.keys(this.state.anuncios).length === 0 && <span>Nenhum produdo cadastrado</span>
        }
        <div>
          <h1>Categoria: {this.props.match.params.urlCategoria}</h1>
          { Object.keys(this.state.anuncios).map( key => {
            return (<Advertisement key={key} id={key} anuncio={ this.state.anuncios[key] } />) })
          }
        </div>
      </div>
    )
  }
}

export default Category