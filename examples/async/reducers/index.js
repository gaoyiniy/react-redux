import { combineReducers } from "redux"
const fetchPost = (
  state = {
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case "REQUEST_POST":
      return { ...state, isFetching: true }
    case "RECEIVE_POST":
      return { ...state, isFetching: false, result: action.result }
    default:
      return state
  }
}

export default combineReducers({ fetchPost })
