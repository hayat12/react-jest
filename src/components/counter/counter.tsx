import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
    <label>Counter</label>
    <h1>{count}</h1> <br />
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counter