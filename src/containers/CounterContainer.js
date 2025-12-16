import React from 'react'
import Counter from '../views/Counter'

class CounterContainer extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0,
        }
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
    }

    reset = () => {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <Counter
                value={this.state.count}
                onIncrement={this.increment}
                onDecrement={this.decrement}
                onReset={this.reset}
            />
        )
    }
}

export default CounterContainer