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
      <h2>{squirrel.name}</h2>
      <Link to={`/info/${squirrel.id}`}><img alt={squirrel.name} src={squirrel.img}/></Link>
      <br/>
      <Link to={`/info/${squirrel.id}`}>INFO</Link>
      {buttonSwitch()}
    </>
  )
}

export default SquirrelCard
