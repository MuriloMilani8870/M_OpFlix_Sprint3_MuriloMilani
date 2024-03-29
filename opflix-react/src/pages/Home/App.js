import React, { Component } from 'react';
import Nav from "../../components/Nav/Nav";
import "../../assets/css/Style.css";
import "../../assets/css/Login.css";

import logo from '../../assets/img/Banner_Home.jpg'

import { Link } from "react-router-dom";
import Axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      lancamentos: [],
    }
  }

  componentDidMount() {
    let url = "http://localhost:5000/api/lancamentos";

    Axios.get(url)
      .then(response => {
        if (response.status === 200) {
          this.setState({ lancamentos: response.data });
          console.log(this.state)
        } else {
          console.log("Ocorreu um erro" + response.status)
        }
      })
      .catch(error => console.log(error))


  }
  render() {
    return (
      <div className="Home">
        {/* <img src={logo} /> */}
      </div>
    );
  }
}

export default App;
