import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ErrorPage = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError()
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className=''>
            <p className="text-red-500 font-bold">Something Went Wrong!</p>
            <p className="text-red-500 font-bold">{error.statusText || error.message}</p>
            <h2 className="text-3xl">Please <button className='btn' onClick={handleLogout}>Sign Out</button></h2>
        </div>
    );
};

export default ErrorPage;