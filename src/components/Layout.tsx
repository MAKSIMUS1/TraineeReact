import { Tabs, Tab, Box } from '@mui/material'
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'


const Layout: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const tabValue =
        location.pathname.endsWith('/about')
            ? 0
            : location.pathname.endsWith('/counters')
            ? 1
            : false
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue === 0) navigate('/about');
        if (newValue === 1) navigate('/counters');
    };

    return (
        <Box>
            <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="О нас"/>
                <Tab label="Счетчики"/>
            </Tabs>
            <Box>
                <Outlet />
            </Box>
        </Box>
    )
};

export default Layout;