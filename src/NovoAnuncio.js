import React, { Component } from 'react'

import base from './base'
import HeaderInterno from './HeaderInterno'

class NovoAnuncio extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    const novoAnuncio = {
      nome: this.refs.nome.value,
      descricao: this.refs.descricao.value,
      preco: this.refs.preco.value,
      telefone: this.refs.telefone.value,
      vendedor: this.refs.vendedor.value,
      foto: 'http://placehold.it/200x140' //this.refs.foto.value
    }
    base.push('anuncios', {
      data: novoAnuncio
    }, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('sucesso')
      }
    })
    e.preventDefault
  }
  render () {
    return(
      <div>
        <HeaderInterno />
        <div className='container mt-4'>
          <h1>Novo anuncio</h1>
          <form onSubmit={this.handleSubmit}>
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