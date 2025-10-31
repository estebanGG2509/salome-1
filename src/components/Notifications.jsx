import './notifications.css';

export default function Notifications() {
  return (
    <div className="notifications-panel">
      <h2>Notificaciones</h2>
      <div className="notification">
        <p>📅 <strong>Actualización del sistema programada:</strong> El mantenimiento se realizará el 25 de Diciembre a las 10 PM.</p>
      </div>
      <div className="notification">
        <p>📄 <strong>Nueva factura disponible:</strong> La factura de este mes ya está lista para descargar.</p>
      </div>
      <div className="notification">
        <p>⏰ <strong>Recordatorio de reunión:</strong> No olvides la reunión de equipo hoy a las 3 PM.</p>
      </div>
      <a href="#" className="ver-todas">Ver todas las notificaciones</a>
    </div>
  );
}