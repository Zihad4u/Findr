import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AutoContext } from './Authprovider/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AutoContext)
    // const location=useLocation();
    // console.log(location);
    if (!loading) {
        if (user) {
            return children
        }
        return <Navigate to="/login" ></Navigate>
    }
};

export default PrivateRoute;