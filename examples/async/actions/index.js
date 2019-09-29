export const receivePost = result => ({
  type: "RECEIVE_POST",
  result
})

export const requestPost = () => ({
  type: "REQUEST_POST"
})

const fetchPost = type => dispatch => {
  dispatch(requestPost())
  return fetch(`https://www.reddit.com/r/${type}.json`)
    .then(response => response.json())
    .then(json => {
      const data = json.data.children.map(child => child.data)
      dispatch(receivePost(data))
    })
}

export const fetchPostIfNeed = type => (dispatch, getState) => {
  // 获取state最新状态
  const { isFetching } = getState().fetchPost
  if (isFetching) {
    return
  }
  return dispatch(fetchPost(type))
}
