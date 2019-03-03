import React from "react"

const SquirrelCard = props => {
  if (!props.squirrel) {
    return null
  }

  const {squirrel} = props
  
  const snacksFind = () => {
      
    return squirrel.snacks.map(snack => {
        return snack.name
    })

  }

  return (
    <>
      <h3>{squirrel.name}</h3>
      <img alt={squirrel.name} src={squirrel.img} />
      <p>{squirrel.bio}</p>
      <h5>{snacksFind()}</h5>
    </>
  )
}

export default SquirrelCard
