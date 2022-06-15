import {React, useContext} from 'react';

const CustomButton = ({setCounter, CounterContext}) =>{
    const countContext = useContext(CounterContext)
    function increment(){
        setCounter( countContext +1)
    }

    function decrement(){
        setCounter( countContext -1)
    }
    return(
        <>
        <div>count:{countContext}</div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        </>
    )
}

export default CustomButton;