import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";

import "../../assets/css/Admin.css";
import { parseJwt } from '../../services/auth.js';
import Axios from 'axios';


class AdminCadastros extends Component {

    constructor() {
        super();
        this.state = {
            titulo : '',
            sinopse : '',
            idCategoria : '',
            duracao : '',
            idFormato : '',
            dataLancamento : '',
            token: localStorage.getItem('usuario-opflix'),
        };
    }


    cadastrarLancamento(event) {
        event.preventDefault();
        fetch("http://localhost:5000/api/lancamentos", {
            method: "POST",
            body: JSON.stringify({ titulo: this.state.titulo, sinopse: this.state.sinopse, idCategoria: this.state.idCategoria, duracao: this.state.duracao, idFormato: this.state.idFormato, dataLancamento: this.state.dataLancamento }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    atualizartitulo(event) {
        this.setState({ titulo: event.target.value })
    }

    atualizarsinopse(event) {
        this.setState({ sinopse: event.target.value })
    }

    atualizaridCategoria(event) {
        this.setState({ idCategoria: event.target.value })
    }

    atualizarduracao(event) {
        this.setState({ duracao: event.target.value })
    }

    atualizaridFormato(event) {
        this.setState({ idFormato: event.target.value })
    }

    atualizardataLancamento(event) {
        this.setState({ dataLancamento: event.target.value })
    }

    componentDidMount() {
        this.setState({ permissao: parseJwt().permissao })
    }



    deletarCategoria = (e) => {
        var e = document.getElementById("input_categoriasDel");
        var idCategoriaDeletar = e.options[e.selectedIndex].value;

        const url = 'http://localhost:5000/Api/Categorias/' + idCategoriaDeletar;

        Axios.delete(url,
            {
                headers: { Authorization: "Bearer " + this.state.token }
            })
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    MudaCategoria = (event) => {
        this.setState({ categoria: event.target.value })
        console.log(this.state.categoria)
    }


    render() {
        return (
            <div>
                <div>
                    <header className="cabecalhoPrincipal">
                        <div className="container">

                            <nav className="cabecalhoPrincipal-nav">
                                {this.state.Permissao}
                            </nav>
                        </div>
                    </header>

                    <main className="conteudoPrincipal">
                        <section className="conteudoPrincipal-cadastro">
                            <h1 className="conteudoPrincipal-cadastro-titulo">Lançamentos</h1>
                            <div className="container" id="conteudoPrincipal-lista">
                                <table id="tabela-lista">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Lançamento</th>
                                        </tr>
                                    </thead>

                                    <tbody id="tabela-lista-corpo"></tbody>
                                </table>
                            </div>

                            <div className="container" id="conteudoPrincipal-cadastro">
                                <h2 className="conteudoPrincipal-cadastro-titulo">
                                    Cadastrar Lançamento
                        </h2>
                                <form onSubmit={this.cadastrarLancamento}>
                                    <div className="container">
                                        <input
                                            type="text"
                                            className="className__titulo"
                                            id="input__titulp"
                                            placeholder="Título"
                                            value={this.state.titulo}
                                            onChange={this.atualizartitulo.bind(this)}
                                        />
                                        <input
                                            type="text"
                                            className="className__sinopse"
                                            id="input__sinopse"
                                            placeholder="sinopse"
                                            value={this.state.sinopse}
                                            onChange={this.atualizarsinopse.bind(this)}
                                        />
                                        <input
                                            type="text"
                                            className="className__idCategoria"
                                            id="input__idCategoria"
                                            placeholder="idCategoria"
                                            value={this.state.idCategoria}
                                            onChange={this.atualizaridCategoria.bind(this)}
                                        />
                                        <input
                                            type="text"
                                            className="className__duracao"
                                            id="input__duracao"
                                            placeholder="Tempo de Duração"
                                            value={this.state.Categoria}
                                            onChange={this.atualizarduracao.bind(this)}
                                        />
                                        <input
                                            type="text"
                                            className="className__idFormato"
                                            id="input__idFormato"
                                            placeholder="Filme ou Série"
                                            value={this.state.idFormato}
                                            onChange={this.atualizaridFormato.bind(this)}
                                        />
                                        <input
                                            type="text"
                                            className="className__dataLancamento"
                                            id="input__dataLancamento"
                                            placeholder="Data de Lançamento"
                                            value={this.state.dataLancamento}
                                            onChange={this.atualizardataLancamento.bind(this)}
                                        />
                                        <button
                                            id="btn__cadastrar"
                                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                        >
                                            Cadastrar
                            </button>
                                    </div>
                                </form>
                            </div>
                        </section>

                        <div>
                            <h3>Adicionar categoria</h3>
                            <form>
                                <input type="text" id="input_NomeCategoria" placeholder="Nome da categoria" onChange={this.MudaCategoria} />
                                <input onClick={this.cadastrarCategoria} type="submit" value="Cadastrar" />
                            </form>
                        </div>

                        {/* <div>
                            <h3>Deletar categoria</h3>

                            <select id="input_categoriasDel" name="categorias">
                                <option value="0">Categoria</option>
                                {this.state.listaCategoria.map(e => {
                                    return (
                                        <option value={e.idCategoria}>{e.NomeCategoria}</option>
                                    )
                                })}
                            </select>
                            <input onClick={this.deletarCategoria} type="submit" value="Deletar" />
                        </div> */}

                    </main>
                </div>
            </div>
        )
    }
}
export default AdminCadastros