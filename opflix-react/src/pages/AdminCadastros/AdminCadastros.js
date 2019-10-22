        import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";

import "../../assets/css/Admin.css";
import Axios from "axios";


class AdminCadastros extends Component {

    constructor() {
        super();
        this.state = {
            Titulo: '',
            Sinopse: '',
            duracao: '',
            DataLancamento: '',
            idCategoria: [],
            idFormato: [],
            Formato: '',
            Categoria: '',
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/api/categorias', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({ categoria: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
        Axios.get('http://localhost:5000/api/Formatos', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({ Formato: data.data });
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    CadastrarCategorias = (event) => {
        event.preventDefault();
        console.log('state', this.state);
        fetch('http://localhost:5000/api/Lancamentos', {
            method: "POST",
            body: JSON.stringify({ Titulo: this.state.Titulo, Sinopse: this.state.Sinopse, Duracao: this.state.Duracao, DataLancamento: this.state.DataLancamento, Categoria: this.state.Categoria , Formato: this.state.Formato}),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(response => { console.log(response) })
            .catch(erro => {
                this.setState({ erro: "Não foi possível cadastrar" });
                console.log(erro);
            });
    }

    atualizarTitulo = (event) => {
        this.setState({ titulo: event.target.value })
        console.log(this.state);
    }
    atualizarSinopse = (event) => {
        this.setState({ Sinopse: event.target.value })
        console.log(this.state);
    }
    atualizarTempoDuracao = (event) => {
        this.setState({ duracao: event.target.value })
        console.log(this.state);
    }
    atualizarDataLancamento = (event) => {
        this.setState({ DataLancamento: event.target.value })
        console.log(this.state);
    }
    atualizarCategoria = (event) => {
        this.setState({ categoria: event.target.value })
        console.log(this.state)
    }
    atualizarFormato = (event) => {
        this.setState({ formato: event.target.value })
        console.log(event.target.value)
    }


    render() {
        return (
            <div>
                <h1>Cadastros</h1>
                <br/>
                <h2>Cadastrar Lançamento</h2>
                <form onSubmit={this.CadastrarCategorias}>
                    <input type="text" placeholder="Titulo" value={this.state.titulo} onChange={this.atualizarTitulo.bind(this)}></input>
                    <input type="text" placeholder="Sinopse" value={this.state.Sinopse} onChange={this.atualizarSinopse.bind(this)}></input>
                    <input type="text" placeholder="Tempo de duração" value={this.state.duracao} onChange={this.atualizarTempoDuracao.bind(this)}></input>
                    <input type="text" placeholder="Data de lançamento" value={this.state.DataLancamento} onChange={this.atualizarDataLancamento.bind(this)} ></input>
                    <select onChange={this.atualizarFormato.bind(this)} values={this.state.atualizarFormato}>
                        <option selected>Tipo da mídia...</option>
                        <option value='1'>Série</option>
                        <option value='2'>Filme</option>
                        <option value='3'>Anime</option>
                        <option value='4'>Desenho</option>
                    </select>
                    <input type="text" placeholder="Categoria" value={this.state.Categoria} onChange={this.atualizarCategoria.bind(this)} ></input>
                   
                    <button>Cadastrar</button>
                </form>

                <div>

                </div>
                 
            </div>
        )
    }
}
export default AdminCadastros