import './summaryBoxes.css';

export default function SummaryBoxes() {
  return (
    <div className="summary-boxes">
      <div className="summary-card">
        <h3>Proyectos Activos</h3>
        <p>12</p>
      </div>
      <div className="summary-card">
        <h3>Tareas Completadas</h3>
        <p>86</p>
      </div>
      <div className="summary-card">
        <h3>Alertas</h3>
        <p>3</p>
      </div>
      <div className="summary-card">
        <h3>Miembros del equipo</h3>
        <p>8</p>
      </div>
    </div>
  );
}