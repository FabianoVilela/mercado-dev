import React, { Component } from 'react'

import base, { storage } from './base'
import HeaderInterno from './HeaderInterno'
import { Redirect } from 'react-router-dom'

class NovoAnuncio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    const file = this.refs.foto.files[0]
    const { name, size } = file
    const ref = storage.ref(name)
    ref.put(file).then(
      img => { 
        const novoAnuncio = {
          nome: this.refs.nome.value,
          descricao: this.refs.descricao.value,
          preco: this.refs.preco.value,
          telefone: this.refs.telefone.value,
          vendedor: this.refs.vendedor.value,
          foto: img.metadata.downloadURLs[0],
          categoria: this.refs.categoria.value
        }
        base.push('anuncios', {
          data: novoAnuncio
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
        <HeaderInterno />
        <div className='container mt-4'>
          <h1>Novo anuncio</h1>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='nome'>Foto</label>
              <input type='file' className='form-control' id='foto' ref='foto' />
            </div>      
            <div className='form-group'>
                <label htmlFor='categoria'>Categorias</label>
                <select className='form-control' id='categoria' ref='categoria' >
                  {this.props.categorias.map( cat => 
                      <option key={cat.url} value={cat.url}>{cat.categoria}</option> 
                  )}
                </select>
            </div>   
            <div className='form-group'>
              <label htmlFor='nome'>Nome</label>
              <input type='text' className='form-control' id='nome' ref='nome' />
            </div>
            <div className='form-group'>
              <label htmlFor='nome'>Descrição</label>
              <textarea className='form-control' id='descricao' ref='descricao' />
            </div>
            <div className='form-group'>
              <label htmlFor='preco'>Preço</label>
              <input type='text' className='form-control' id='preco' ref='preco' />
            </div>
            <div className='form-group'>
              <label htmlFor='telefone'>Telefone</label>
              <input type='text' className='form-control' id='telefone' ref='telefone' />
            </div>
            <div className='form-group'>
              <label htmlFor='vendedor'>Vendedor</label>
              <input type='text' className='form-control' id='vendedor' ref='vendedor' />
            </div>
            <button type="submit" className='btn btn-primary'>Salvar</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NovoAnuncio