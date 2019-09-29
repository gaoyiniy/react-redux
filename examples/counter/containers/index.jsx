import React from "react"

const Counter = props => {
  return (
    <>
      <h5>result: {props.value.count}</h5>
      <button onClick={props.onIncrement}>+1</button>
      <button onClick={props.onDecrement}>-1</button>
    </>
  )
}

export default Counter
