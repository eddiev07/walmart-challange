import {createContext, React, useState} from 'react';

import CustomButton from '../Utils/Button';

const Counter = () => {
    const [counter,
        setCounter] = useState(0)
    const CounterContext = createContext({counter})
    return (
        <CounterContext.Provider value={counter}>
            <div className="counterDiv">
                <CustomButton setCounter={setCounter} CounterContext={CounterContext}/>
            </div>
        </CounterContext.Provider>
    )
}

export default Counter;