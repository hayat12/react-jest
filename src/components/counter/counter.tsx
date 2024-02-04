import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <label>Counter</label>
      <h1>{count}</h1> <br />
      <input
        type="number"
        onChange={(event) => setAmount(parseInt(event.target.value))}
        value={amount}
        name="count"
      />
      <button onClick={() => setCount(amount)}>Set</button>
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
