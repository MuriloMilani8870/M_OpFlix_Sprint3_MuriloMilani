import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";

import "../../assets/css/Style.css";
import Axios from "axios";


class Lancamentos extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/api/lancamentos', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({ lista: data.data });
                console.log(this.state)
            })
            .catch(erro => {
                console.log(erro);
            });
    }
    render() {
        return (
            <div>
                <div className="lancamentos">
                    {this.state.lista.map(element => {
                        return (
                            <div id="infos">
                                <ul>
                                    <li>Título: {element.titulo}</li>
                                    <li>Sinopse: {element.sinopse}</li>
                                    <li>Tempo de duração: {element.duracao}</li>
                                    <li>Categoria: {element.idCategoria}</li>
                                    <li>Data de lançamento: {element.dataLancamento}</li> 
                                    <li>Formato: {element.idFormato}</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default Lancamentos