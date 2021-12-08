import React from 'react';
import { useSelector } from 'react-redux';
import PrivateLayout from '../Layouts/Private';
import PublicLayout from '../Layouts/Public';

const LayoutContainer = () => {
    
    const {currentUser} = useSelector((state: any) => state.users)

    if (currentUser) {
        return <PrivateLayout />
    }

    return <PublicLayout />
}

export default LayoutContainer