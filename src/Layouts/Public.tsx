import React from 'react';
import LoginPage from '../Pages/Login';

import {Routes, Route} from 'react-router-dom';
import RegisterPage from '../Pages/Register';

const PublicLayout = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}

export default PublicLayout;