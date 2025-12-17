import React, { memo } from 'react';
import { Box, Button, Typography } from '@mui/material'
import { styles } from './styles'

export interface CounterProps {
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
}

const Counter: React.FC<CounterProps> = ({ value, onIncrement, onDecrement, onReset }) => {
    return (
        <Box sx={styles.container}>
            <Typography variant="h4">
                {value}
            </Typography>
    
            <Box sx={styles.buttons}>
                <Button onClick={onIncrement} variant="contained">
                    Increment
                </Button>
                
                <Button onClick={onDecrement} variant="outlined">
                    Decrement
                </Button>
                
                <Button onClick={onReset} variant="text">
                    Reset
                </Button>
            </Box>
        </Box>
    )
}

export default memo(Counter)