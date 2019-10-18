import React,{Component} from "react";
import {Link} from "react-router-dom";
import jsonwebtoken from "jsonwebtoken";


export default class Nav extends Component{
    constructor(){
        super();
        this.state = {
            statusUsuario : false,
            permissao : "",
        }
    }

    componentDidMount(){
        let user = localStorage.getItem("usuario-opflix");
        if (user != null){
            this.setState({statusUsuario : true})
        }else{
            var jwt = require("jsonwebtoken");
            var token = localStorage.getItem("usuario-opflix");
            let decoded = jwt.decode(token);
        }
    }


    Deslogar = (event) =>{
        event.preventDefault();
        localStorage.removeItem("usuario-opflix");
        this.setState({statusUsuario : false})
    }
    
    render(){
        return(
            <nav>      
            </nav>
        )
    }
}