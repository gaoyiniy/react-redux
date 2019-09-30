# react-redux

## redux 源码

### createStore

`createStore(reducer, [preloadedState], [enhancer])`

**参数**

1. `reducer`(Function): 返回一个 state tree
2. `preloadedState`(any): 任意类型，state 的初始值。注意与 `reducer` 对应
3. `enhancer`(Function): 主要作用于 store，可以通过第三方中间件 `applyMiddleware` 来增强 `store` 的功能。

```js
const store = createStore(reducer1, ["xxxx"]) // 单个reducer
const store = createStore(
  combineReducers({
    reducer1,
    reducer2
  }),
  {
    reducer1: ["reducer1 initstate"], // reducer1对应的初始state
    reducer2: ["reducer2 initstate"] // reducer2对应的初始state
  }
) // 多个reducer
```

**Returns**

(Store): 返回一个拥有全部状态的对象。更改这个对象的唯一方式是通过 `dispatch`。通过 `subscribe` 来监听 `store` 的更新

**Store 的方法**

1. `getState()`(any): 最后一个 reducer 返回的 state
2. `subscribe`(listener): `dispatch` 后调用。可以通过 `getState()` 来获取最新的状态。
   **参数**:
   listener(function): 尽量不要在这里 `dispatch`，避免死循环调用。
   **Returns**
   (Function): 返回一个取消订阅的方法, 取消订阅后将不再执行 `subscribe` 里的方法。

   例如：

   ```js
   const store = createStore(todos)
   const unSubscribe = store.sunscribe(() => {
     console.log("subscribe", store.getState()) // 将不输出第二个dispatch
   })

   store.dispatch({
     type: "xxxx1"
   })

   unSubscribe()

   store.dispatch({
     type: "xxxx2"
   })
   ```

3. `dispatch(action)`: `dispatch` 一个 `action`。唯一的更改 `state` 状态的方式

4. `replaceReducer(nextReducer)`: 替换当前的 reducer。

### combineReducers

`combineReducers(reducers)`

合并多个 `redcuer` 为一个。

**参数**

1. `reducers`(object): 对象。多个 `reducer` 组成。例如

```js
const reducers = combineReducers({ todos1: () => {}, todos2: () => {} })
```

**Returns**

(Function): 调用内部每个 `reducer`，并构造为同一结构的 `state` 对象

### compose

`compose(..functions)`

**参数**
arguments: 从右到左执行， 仅接受**一个**参数

**Returns**
返回一个从右到左执行的函数，右边函数的参数就是传进去的参数。返回值作为下一个函数的参数。

```js
function compose() {
  const fns = Array.from(arguments)
  if (fns.length === 0) {
    return args => args
  }
  if (fns.length === 1) {
    return fns[0]
  }
  return fns.reduce((prev, next) => arg => prev(next(arg))
}
```
