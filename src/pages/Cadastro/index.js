import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';

class Cadastro extends React.Component{
  constructor(){
    super();
      this.state = {
        name: '',
        email: '',
        password: ''
    }

  }

  handleInputChangeName =  (event) => {
    this.setState({ name: event.target.value })
  }

  handleInputChangeEmail =  (event) => {
    this.setState({ email: event.target.value })
  }

  handleInputChangePass =  (event) => {
    this.setState({ password: event.target.value })
  }

   Cadastrar = () => {
    const user = api.post('/users', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });

    console.log(user);
  }

  render(){
    return (
      <div className="content">
        <section className="form-section">
          <h1>Cadastre-se</h1>
          <div className="form-wrapper">
            <form onSubmit={this.Cadastrar}>
              <div className="input-block">
                <label for="login-email">Nome</label>
                <input 
                  type="text" 
                  id="login-nome" 
                  value={this.state.name} 
                  onChange={this.handleInputChangeName}
                  required={true}
                />
              </div>
              <div className="input-block">
                <label for="login-email">E-mail</label>
                <input 
                  type="email" 
                  id="login-email" 
                  value={this.state.email} 
                  onChange={this.handleInputChangeEmail}
                  required={true}
                />
              </div>
              <div className="input-block">
                <label for="login-password">Password</label>
                <input 
                  type="password" 
                  id="login-password" 
                  value={this.state.password} 
                  onChange={this.handleInputChangePass}
                  required={true}
                />
              </div>
                <button type="submit" className="btn-login">Cadastrar</button>
            </form>
          </div>
          <Link to="/">
            <a href="#">Já possui uma conta? Faça Login</a>
          </Link>
        </section>
      </div>
    );
  }
}

export default Cadastro;
