import React from 'react'

export const Counter = ({ counter, increment, decrement }) => <div>
  <div>counter: {counter}</div>
  <button onClick={increment}>+</button>
  <button onClick={decrement}>-</button>
</div>