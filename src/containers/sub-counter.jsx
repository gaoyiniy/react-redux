import React from "react"
const SubCounter = props => {
  const handleClick = () => {
    console.log(props, "props")
    props.increment()
  }
  return <button onClick={handleClick}>child dispatch</button>
}

export default SubCounter
