import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";

import "../../assets/css/Admin.css";
import Axios from "axios";

class AdminHome extends Component {
    constructor() {
        super();
        this.state = {
            NomeUsuario: '',
            Email: '',
            Senha: '',
            Permissao: '',
            CPF: '',
            token: localStorage.getItem("usuario-opflix")
        };
        this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
    }

    cadastrarUsuario(event) {
        event.preventDefault();
        console.log(this.state);
        fetch('http://localhost:5000/api/Usuarios', {
            method: "POST",
            body: JSON.stringify({ NomeUsuario: this.state.NomeUsuario, Email: this.state.Email, Senha: this.state.Senha, Permissao: this.state.Permissao, CPF: this.state.CPF }),
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

    atualizarNome = (event) => {
        this.setState({ NomeUsuario: event.target.value })
        console.log(this.state);
    }
    atualizarEmail = (event) => {
        this.setState({ Email: event.target.value })
        console.log(this.state);
    }
    atualizarSenha = (event) => {
        this.setState({ Senha: event.target.value })
        console.log(this.state);
    }
    atualizarCPF = (event) => {
        this.setState({ CPF: event.target.value })
        console.log(this.state)
    }
    atualizarPermissao = (event) => {
        this.setState({ Permissao: event.target.value })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
                <div>
                    <div>
                    </div>
                    <div>
                        <form onSubmit={this.cadastrarUsuario}>
                            <input type="text" placeholder="Nome" value={this.state.NomeUsuario} onChange={this.atualizarNome.bind(this)} ></input>
                            <input type="text" placeholder="Email" value={this.state.Email} onChange={this.atualizarEmail.bind(this)}></input>
                            <input type="password" placeholder="Senha" value={this.state.Senha} onChange={this.atualizarSenha.bind(this)}></input>
                            <input type="text" placeholder="CPF" value={this.state.CPF} onChange={this.atualizarCPF.bind(this)}></input>
                            <select value={this.state.Permissao} onChange={this.atualizarPermissao.bind(this)}>
                                <option selected>Qual a permissão do usuario?</option>
                                <option value='ADMINISTRADOR'>Administrador</option>
                                <option value='COMUM'>Cliente</option>
                            </select>
                            <button>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default AdminHome