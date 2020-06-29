import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Cadastro() {
  return (
    <div className="content">
      <section className="form-section">
        <h1>Cadastre-se</h1>
        <div className="form-wrapper">
          <form action="#">
            <div className="input-block">
              <label for="login-email">Nome</label>
              <input type="text" id="login-nome" />
            </div>
            <div className="input-block">
              <label for="login-email">E-mail</label>
              <input type="email" id="login-email" />
            </div>
            <div className="input-block">
              <label for="login-password">Password</label>
              <input type="password" id="login-password" />
            </div>
            <Link to="/app">
              <button type="submit" className="btn-login">Cadastrar</button>
            </Link>
          </form>
        </div>
        <Link to="/">
          <a>Já possui uma conta? Faça Login</a>
        </Link>
      </section>
    </div>
  );
}

export default Cadastro;
