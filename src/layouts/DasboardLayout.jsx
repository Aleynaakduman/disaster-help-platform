
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import LoginNavbar from '../components/LoginNavbar/LoginNavbar';
import './DashboardLayout.css';

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
       <LoginNavbar/>
       <div className="dashboard-body">
            <Sidebar/>

            <div className="dashboard-content">
                <Outlet/>
            </div>
       </div>
    </div>
  );
}

export default DashboardLayout;
