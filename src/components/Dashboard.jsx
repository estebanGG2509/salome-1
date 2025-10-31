import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import QuickAccess from './QuickAccess.jsx';
import Notifications from './Notifications.jsx';
import SummaryBoxes from './summaryBoxes.jsx'; // nuevo componente
import { useApp } from './AppContext.jsx';
import './dashboard.css';

export default function Dashboard() {
  const { webPage } = useApp();

  return (
    <div className="dashboard">
      <Sidebar webPage={webPage} />

      <div className="main-panel">
        <Header />
        <h1 className="panel-title">Panel de Control</h1>
        <p className="panel-subtitle">Un resumen de la actividad de tu cuenta.</p>

        <SummaryBoxes />

        <div className="content-sections">
          <Notifications />
          <QuickAccess />
        </div>
      </div>
    </div>
  );
}