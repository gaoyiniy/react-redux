import React, { useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as TodoActions from "../actions"
import SubCounter from "./sub-counter"

console.log(TodoActions)

const Counter = props => {
  const boundActions = bindActionCreators(TodoActions, props.dispatch)
  const boundActions1 = bindActionCreators(
    TodoActions.decrement,
    props.dispatch
  )
  console.log(boundActions1, "boundActions1")
  console.log(boundActions, "boundActions")
  const handleClick = () => {
    console.log(props.dispatch)
    boundActions.increment()
  }

  const handleDecrement = () => {
    boundActions1()
  }

  useEffect(() => {}, [])

  return (
    <>
      <h5>result:{props.count}</h5>
      <button onClick={handleClick}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <SubCounter {...boundActions} />
    </>
  )
}

const mapPropsToState = state => ({
  count: state.todos.count
})

// const mapDispatchToState = {
//   increment,
//   decrement
// }

export default connect(mapPropsToState)(Counter)
