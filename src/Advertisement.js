import React, {Component} from 'react'
import axios from 'axios'

class Advertisement extends Component {
    constructor(props) {
        super(props)

        this.state = {
            advertisement: {},
            isLoading: true
        }

        const id = this.props.match.params.idAnuncio
        const url = `https://mercadodev-fvs.firebaseio.com/anuncios/${id}.json`
        axios
            .get(url)
            .then(data => {
                this.setState({
                    advertisement: data.data,
                    isLoading: false
                })
            })
    }
    render() {
        const advertisement = this.state.advertisement

        // if (this.state.isLoading) {
        //     return <span>Loading</span>
        // }

        return (
            <div>
                <h1>{advertisement.nome}</h1>
                <p><img src={advertisement.foto} alt={advertisement.nome}/></p>
            </div>
        )
    }
}

export default Advertisement