import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import reducers from "./reducers"

import Counter from "./containers"

const store = createStore(reducers)

const App = props => {
  return (
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />
  )
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"))
}

render()

store.subscribe(() => {
  render()
})
