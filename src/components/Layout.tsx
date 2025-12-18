import { Tabs, Tab, Box } from '@mui/material'
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'


const Layout: React.FC = () => {
    const [value, setValue] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        if (newValue === 0) navigate('/about');
        if (newValue === 1) navigate('/counters');
    };

    return (
        <Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
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