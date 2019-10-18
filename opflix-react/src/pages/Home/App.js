import React,{Component} from 'react';
import Nav from "../../components/Nav/Nav";
import "../../assets/css/Style.css";


import {Link} from "react-router-dom";
import Axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lancamentos : [],
    }  
  }

  componentDidMount(){
    let url = "http://localhost:5000/api/lancamentos";
    
    Axios.get(url)
    .then(response =>{
      if (response.status === 200 ){
        this.setState({lancamentos : response.data});
        console.log(this.state)
      }else{
        console.log("Ocorreu um erro" + response.status)
      }
    })
    .catch(error => console.log(error))

    
  }

  formatarData = (element) =>{
    let data = element.dataLancamento.split("T")[0];
    let ano = data.split("-")[0];
    let mes = data.split("-")[1];
    let dia = data.split("-")[2];

    return( dia + "/" + mes + "/" + ano);
}
  
  render(){
    return (
        <div>

        </div>
    );
  }
}
  
  export default App;
