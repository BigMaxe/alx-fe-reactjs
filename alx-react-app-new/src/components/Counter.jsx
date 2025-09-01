import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)} style={{ margin: '20px 20px' }} >Increment</button>
            <button onClick={() => setCount(count - 1)} style={{ margin: '20px 20px' }} >Decrement</button>
            <button onClick={() => setCount(0)} style={{ margin: '20px 20px' }} >Reset</button>
        </div>
    )
}

export default Counter;