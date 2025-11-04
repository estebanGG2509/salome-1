import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Iniciar Sesión</h1>
        <p>Bienvenido de nuevo. Accede a tu cuenta.</p>
      </div>

      <div className="login-box">
        <form>
          <label htmlFor="email">Email o Nombre de Usuario</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="tú@ejemplo.com"
            required
          />

          <div className="forgot-password">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            required
          />

          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>

      <div className="register-link">
        ¿No tienes una cuenta? <a href="#">Regístrate</a>
      </div>
    </div>
  );
};

export default Login;