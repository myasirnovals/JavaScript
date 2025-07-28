import React, {useState} from 'react';
import '../Counter.css';

function Counter() {
    let count = 0;

    const [currentState, updateState] = useState(count);
    const handleClick = () => {
        updateState(currentState + 1);
    };

    return (<>
        <div className="counter-parent">
            <div className="main-div">
                <h3>Counter</h3>
                <button onClick={handleClick}>{currentState}</button>
            </div>
        </div>
    </>);
}

export default Counter;