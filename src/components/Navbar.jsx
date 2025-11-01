import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Mi Aplicación</h1>
      <div className="nav-buttons">
        <Link to="/login"><button className="login">Iniciar Sesión</button></Link>
         <Link to="/registro"><button className="register">Registrarse</button></Link>
      </div>
    </nav>
  );
}