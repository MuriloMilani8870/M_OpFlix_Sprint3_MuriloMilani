import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";

import "../../assets/css/Style.css";
import Axios from "axios";


class App extends Component {

    constructor() {
        super();
        this.state = {
            listaPlataformas: [],
            listaLancamento: [],
            token: localStorage.getItem("usuario-opflix")
        }
    }
}

export default class Lancamentos extends Component {
    render() {
        return (
            <div className="App">
                {/* <Nav/> */}
                <main>


                    <div id="separador">

                        <div id="ladoEsq">
                            <div id='preto'></div>
                            <div id='filtros'>

                                <h3 id="home__filtros--h3">Filtrar por:</h3>
                                <p id="home__filtros--erro"></p>


                                <div id="home__div--plat" className="home__filtros_individual">

                                    <label for="plataforma">Plataforma:</label>
                                </div>

                                <div id="data" className="home__filtros_individual">
                                    <form>
                                        <label for="data">Data:</label>
                                        <input type="date" name="data" id="inpData" />
                                        <input type="submit" value="Buscar" onClick={this.buscarPorData} />
                                    </form>
                                </div>

                            </div>
                        </div>

                        <section id='sec_lanc'>

                            <h2>Navegue pelos nossos lançamentos!</h2>
                            <p id="home_titulo"></p>
                        </section>

                    </div>
                </main>

                {/* <Rodape/> */}
            </div>
        )
    }
}