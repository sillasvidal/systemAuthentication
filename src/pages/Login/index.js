import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="content">
      <section className="form-section">
        <h1>Entrar</h1>
        <div className="form-wrapper">
          <form action="#">
            <div className="input-block">
              <label for="login-email">E-mail</label>
              <input type="email" id="login-email" />
            </div>
            <div className="input-block">
              <label for="login-password">Password</label>
              <input type="password" id="login-password" />
            </div>
            <Link to="/dashboard">
              <button type="submit" className="btn-login">Login</button>
            </Link>
          </form>
        </div>
        <Link to="/cadastro">
          <a>Não possui uma conta? Cadastre-se</a>
        </Link>
      </section>
    </div>
  );
}

export default Login;
