import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const DashRoot = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashRoot;