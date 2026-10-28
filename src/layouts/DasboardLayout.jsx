import {useState} from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import LoginNavbar from '../components/LoginNavbar/LoginNavbar';
import './DashboardLayout.css';

function DashboardLayout() {
    const [open , setOpen] = useState(false)
  return (
    <div className="dashboard-layout">
       <LoginNavbar open={open} setOpen={setOpen} />
       <div className="dashboard-body">
            <Sidebar isOpen={open} setOpen={setOpen} />

            <div className="dashboard-content">
                <Outlet/>
            </div>
       </div>
    </div>
  );
}

export default DashboardLayout;
