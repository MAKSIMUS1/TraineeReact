import React, { useCallback, useState } from 'react'
import Counter from '../views/Counter'
import { Box, Button, Typography } from '@mui/material';

const CountersContainer: React.FC = () => {
    const [counters, setCounters] = useState<number[]>([0]);  

    const addCounter = useCallback(() => {
        setCounters(
            (prev) => {
                const updatedCounters = prev.map((value) => value % 2 === 0 ?  value + 1 : value)
                return [...updatedCounters, 0]
            });
    }, [])
    
    const removeCounter = useCallback(() => {
        setCounters((prev) => {
            if (prev.length === 1) return prev;
            
            const updatedCounters = prev.slice(0, -1).map((value) => (value % 2 !== 0 ? value - 1 : value))
            return updatedCounters;
        })
    }, [])
    
    const resetCounter = useCallback(() => {
        setCounters([0])
    }, [])
    
    const increment = useCallback((index: number) => {
        setCounters((prev) => {
            const updatedCounters = prev.map((value, i) => i === index ? value + 1: value)
            return updatedCounters;
        });
    }, [])

    const decrement = useCallback((index: number) => {
        setCounters((prev) => {
            const updatedCounters = prev.map((value, i) => i === index ? value - 1 : value) 
            return updatedCounters;
        });
    }, [])

    const reset = useCallback((index: number) => {
        setCounters((prev) => {
            const updatedCounters = prev.map((value, i) => i === index ? 0 : value)
            return updatedCounters;
        });
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