import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";

import "../../assets/css/Admin.css";
import Axios from "axios";

class AdminHome extends Component {
    constructor() {
        super();
        this.state = {
            Nome: '',
            Email: '',
            Senha: '',
            Permissao: '',
            token: localStorage.getItem("usuario-opflix")
        };
    }

    // adicionarItem = (event) => {
    //     event.preventDefault();
    //     console.log(this.state.li);
    //     Axios.post('http://localhost:5000/api/usuarios', {
    //         Nome: this.state.Nome,
    //         Email: this.state.Email,
    //         Senha: this.state.Senha,
    //         Permissao: this.state.Permissao
    //     })
    //         .then(response => { console.log(response) })
    //         .catch(erro => {
    //             this.setState({ erro: "Não foi possível cadastrar" });
    //             console.log(erro);
    //         });
    // }

    // atualizarNome = (event) => {
    //     this.setState({ Nome: event.target.value })
    //     console.log(this.state);
    // }
    // atualizarEmail = (event) => {
    //     this.setState({ Email: event.target.value })
    //     console.log(this.state);
    // }
    // atualizarSenha = (event) => {
    //     this.setState({ Senha: event.target.value })
    //     console.log(this.state);
    // }
    // atalizarPermissao = (event) => {
    //     this.setState({ Permissao: event.target.value })
    //     console.log(this.state)
    // }

    render() {
        return (
            <div>
                {/* <nav>
                    <ul>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
                <div>
                    <div>
                    </div>
                    <div>
                        <form action="">
                            <input type="text" placeholder="Nome" onInput={this.atualizarNome}></input>
                            <input type="text" placeholder="Email" onInput={this.atualizarEmail}></input>
                            <input type="password" placeholder="Senha" onInput={this.atualizarSenha}></input>
                            <select onInput={this.atalizarPermissao}>
                                <option selected>Qual a permissão do usuario?</option>
                                <option value='1'>Administrador</option>
                                <option value='2'>Cliente</option>
                            </select>
                            <button onClick={this.adicionarItem}>Cadastrar</button>
                        </form>
                    </div>
                </div> */}
            </div>
        );
    }
}


export default AdminHome