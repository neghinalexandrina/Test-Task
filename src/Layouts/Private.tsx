import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from '../Pages/Home';

const PrivateLayout = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default PrivateLayout;