import './Features.css';

export default function Features() {
  return (
    <section className="features">
      <h2>Características Principales</h2>
      <p>Descubre cómo nuestra plataforma puede ayudarte a alcanzar tus objetivos de manera más eficiente.</p>
      <div className="feature-boxes">
        <div>
          <h3>Gestión Centralizada</h3>
          <p>Accede a todas tus herramientas desde un solo lugar, con una interfaz intuitiva y fácil de usar.</p>
        </div>
        <div>
          <h3>Flujos de Trabajo Ágiles</h3>
          <p>Optimiza tus procesos con herramientas que se adaptan a tu forma de trabajar.</p>
        </div>
        <div>
          <h3>Seguridad Confiable</h3>
          <p>Mantén tu información segura con protocolos de protección avanzados.</p>
        </div>
      </div>
    </section>
  );
}