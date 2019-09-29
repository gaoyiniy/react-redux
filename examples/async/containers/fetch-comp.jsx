import React from "react"
import { connect } from "react-redux"
import { fetchPostIfNeed } from "../actions"

const FetchComp = ({ dispatch, result = [], isFetching }) => {
  const handleClick = type => {
    dispatch(fetchPostIfNeed(type))
  }
  return (
    <>
      <button type="button" onClick={() => handleClick("reactjs")}>
        subsribe reacjs
      </button>
      <button type="button" onClick={() => handleClick("frontend")}>
        subsribe frontend
      </button>
      <dialog open={isFetching}>loading...</dialog>
      <div>
        <ul>
          {result.map((rs, key) => (
            <li key={key}>
              <a href={rs.url} target="_blank" rel="noopener noreferrer">
                {rs.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const mapPropsToState = state => state.fetchPost

export default connect(mapPropsToState)(FetchComp)
