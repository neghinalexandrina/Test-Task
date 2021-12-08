import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import StarsChart from '../Components/Chart';
import Animation from '../Components/Animation';
import { LOGOUT } from '../store/actions/users';

const HomePage = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({type: LOGOUT})
    }

    return (
        <div>
            <div>Home</div>
            <Button onClick={handleLogout}>Log Out</Button>
            <Animation />
            <StarsChart />
        </div>
    )
}

export default HomePage;
