import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import * as serviceWorker from './serviceWorker';
import jsonwebtoken from "jsonwebtoken";



import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado';
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Lancamentos from "./pages/Lancamentos/Lancamentos";
import AdminHome from "./pages/AdminHome/AdminHome";
import AdminCadastro from "./pages/AdminCadastros/AdminCadastros";

import { parseJwt } from './services/auth';

const RotaPrivada = ({ component: Component }) => (
    <Route
        render={props =>
            localStorage.getItem("usuario-opflix") !== null ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{ pathname: "/login", state: { from: props.location } }}
                    />
                )
        }
    />
);

const RotaPrivadaAdm = ({ component: Component }) => (
    <Route
        render={props =>
            localStorage.getItem("usuario-opflix") === "ADMINISTRADOR" ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{ pathname: "/AdminHome", state: { from: props.location } }}
                    />
                )
        }
    />
);

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/Cadastro" component={Cadastro} />
                <RotaPrivada exact path="/lancamentos" component={Lancamentos} />
                <RotaPrivadaAdm path="/AdminHome" component={AdminHome} />
                <RotaPrivadaAdm path="/AdminCadastro" component={AdminCadastro} />
                <Route component={NaoEncontrado} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
