import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";

import Axios from "axios";

import {Link} from 'react-router-dom';


export default class Login extends Component {
    constructor() {
        super();
        localStorage.removeItem("usuario-opflix");
        this.state = {
            email: "",
            senha: "",
        }
    }

    atualizarEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    atualizarSenha = (event) => {
        this.setState({ senha: event.target.value })
    }

    Logar = (event) => {

        event.preventDefault();

        let url = "http://localhost:5000/api/Login";

        Axios.post(url, {
            headers: {
                "Content-Type": "application/json"
            },
            email: this.state.email,
            senha: this.state.senha,
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.token)
                    localStorage.setItem("usuario-opflix", response.data.token);
                    this.props.history.push("/lancamentos");
                    console.log("ok")
                }
            })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <div className="Login">
                <header>
                    <Nav />
                </header>
                <main className="container">
                    <div className="content">
                        <h2>Efetue seu login</h2>
                        <form onSubmit={this.Logar} id="form_login">
                            <label>
                                Email
                        <br />
                                <input onChange={this.atualizarEmail} type="email" className="input_login" />
                            </label>
                            <br />
                            <label>
                                Senha
                        <br />
                                <input onChange={this.atualizarSenha} type="password" className="input_login" />
                            </label>


                            <br />
                            <br />
                            <Link className="link_cadastrar" to="/Cadastro">Criar conta</Link>
                            <br/>
                            <input type="submit" value="Entrar" className="submit_login" />
                        </form>
                    </div>

                </main>
            </div>
        )
    }
}