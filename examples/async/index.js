import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import reducers from "./reducers"

import FetchComp from "./containers/fetch-comp"

const middleWare = [thunk]

if (process.env.NODE_ENV !== "production") {
  middleWare.push(createLogger())
}

const store = createStore(reducers, applyMiddleware(...middleWare))

const App = () => {
  return (
    <>
      <FetchComp />
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
