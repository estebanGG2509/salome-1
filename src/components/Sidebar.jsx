import './sidebar.css';

export default function Sidebar({ setPage }) {
  return (
    <aside className="sidebar">
      <h2>NombreApp</h2>
      <ul>
        <li className="active">Dashboard</li>
        <li>Perfil</li>
        <li>Configuración</li>
        <li onClick={() => setPage('login')}>Sesión</li>
      </ul>
    </aside>
  );
}