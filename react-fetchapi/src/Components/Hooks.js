// Hooks allow me to use State and other React features without writing a class
// Hooks were introduced in React 16.8

import React, {useState} from 'react';

const Example = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    )
}

export default Example