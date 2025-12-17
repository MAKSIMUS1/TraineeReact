import React, { useCallback, useState } from 'react'
import Counter from '../views/Counter'
import { Box, Button, Typography } from '@mui/material';

const CountersContainer: React.FC = () => {
    const [counters, setCounters] = useState<number[]>([0]);  

    const addCounter = () => {
        setCounters((prev) => [...prev.map((v) => (v % 2 === 0 ? v + 1 : v)), 0]);
    }
    
    const removeCounter = () => {
        setCounters((prev) => {
            if (prev.length === 1) return prev;
            
            return prev.slice(0, -1).map((v) => (v % 2 !== 0 ? v - 1 : v))
        })
    }
    
    const resetCounter = () => {
        setCounters([0])
    }
    
    const increment = useCallback((index: number) => {
        setCounters((prev) => prev.map((v, i) => i === index ? v + 1 : v));
    }, [])

    const decrement = useCallback((index: number) => {
        setCounters((prev) => prev.map((v, i) => i === index ? v - 1 : v));
    }, [])

    const reset = useCallback((index: number) => {
        setCounters((prev) => prev.map((v, i) => i === index ? 0 : v));
    }, [])


    return (
        <Box>
            <Typography variant="h4">
                Counters
            </Typography>
    
            <Box>
                <Button onClick={addCounter} variant="contained">
                    Add counter
                </Button>
                
                <Button onClick={removeCounter} variant="outlined">
                    Remove counter
                </Button>
                
                <Button onClick={resetCounter} variant="text">
                    Reset counters
                </Button>
            </Box>

            {counters.map((item, index) => (
                <Counter key={index} 
                    value={item}
                    onIncrement={() => increment(index)}
                    onDecrement={() => decrement(index)}
                    onReset={() => reset(index)} />
            ))}
        </Box>
    )


}

export default CountersContainer