import PropTypes from 'prop-types'
import { Box, Button, Typography } from '@mui/material'
import { styles } from './styles'

const Counter = ({ value, onIncrement, onDecrement, onReset }) => {
    return (
        <Box sx={styles.container}>
            <Typography variant="h4">
                {value}
            </Typography>
    
            <Box sx={styles.buttons}>
                <Button varian="contained" onClick={onIncrement}>
                    Increment
                </Button>
                
                <Button varian="outlined" onClick={onDecrement}>
                    Decrement
                </Button>
                
                <Button varian="text" onClick={onReset}>
                    Reset
                </Button>
            </Box>
        </Box>
    )
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
}

export default Counter