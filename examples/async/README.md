# 异步请求

## 运用中间件 redux-thunk

发送异步请求使用中间件 redux-thunk, 可以通过 getState 获取最新的状态，通过提供的 dispatch 发送 action

**配置**

```js
import { createStore, applyMiddleWare } from "redux"
import thunk from "redux-thunk"

const middleWare = [thunk]
const store = createStore(reducers, initState, applyMiddleWare(...middleWare))
```

**实例**

```js
const fetchPost = args => (dispatch, getState) => {
  // 获取state
  const state = getState()
  return dispatch(action)
}
const FetchComp = props => {
  const handleClick = () => {
    return props.dispatch(fetchPost())
  }

  return <button onClick={handleClick}>fetch</button>
}
```
