import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar'

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div style={{ display: 'flex' }}>

      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
