import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Count() {
    const state = useSelector(state => state.count);
    const dispatch = useDispatch();
    const decrement = () => {
        dispatch({type: 'DECREMENT'})
    }
    const increment = () => {
        dispatch({type: 'INCREMENT'})
    }
    const reset = () => {
        dispatch({type: 'RESET'})
    }
    return (
        <div>
          <h2>Current Count: {state}</h2>
          <div>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+</button>
          </div>
        </div>
    )
}
export default Count;
