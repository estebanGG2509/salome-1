import { useNavigate } from 'react-router-dom';
import './hero.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h2>Bienvenido a Nuestra Plataforma</h2>
      <p>Un espacio diseñado para simplificar tus tareas y potenciar tu productividad. Empieza en segundos.</p>
      <button onClick={() => navigate('/dashboard')}>Comenzar Ahora</button>
    </section>
  );
}