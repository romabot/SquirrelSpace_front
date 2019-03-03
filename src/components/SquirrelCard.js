import React from "react"

const SquirrelCard = props => {
  if (!props.squirrel) {
    return null
  }
  const { squirrel } = props

  const buttonSwitch = () => {
    if (squirrel.caught) {
      return <button onClick={clickHandle}>RELEASE!</button>
    } else {
      return <button onClick={clickHandle}>🥅CATCH SQUIRREL</button>
    }
  }

  const clickHandle = () => {
    return props.clickSquirrel(squirrel)
  }

  return (
    <>
      <h1>{squirrel.name}</h1>
      <img alt={squirrel.name} src={squirrel.img} />
      <br />
      {buttonSwitch()}
    </>
  )
}

export default SquirrelCard
