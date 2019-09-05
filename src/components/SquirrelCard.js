import React from "react"
import { Link } from 'react-router-dom' 

const SquirrelCard = props => {
  if (!props.squirrel) {
    return null
  }
  const { squirrel } = props

  const buttonSwitch = () => {
    if (squirrel.caught) {
      return <button onClick={clickHandle}>🐿 RELEASE!</button>
    } else {
      return <button onClick={clickHandle}>🐿 CATCH SQUIRREL</button>
    }
  }

  const clickHandle = () => {
    return props.clickSquirrel(squirrel)
  }

  return (
    <>
      <h1 className="zero-margin">{squirrel.name}</h1>
      {/* <Link to={`/skillselect`}><button>SELECT SKILL<button/></Link> */}
      <br/>
      <Link to={`/squirrels/${squirrel.id}`} className="zero-margin">INFO</Link>
      {buttonSwitch()}
    </>
  )
}

export default SquirrelCard
