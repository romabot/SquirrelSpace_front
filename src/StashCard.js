import React from "react"

const StashCard = props => {
  const { stash } = props

  return (
    <>
      <h2>{stash.name}</h2>
      <img alt= {stash.name} src={stash.img}/>
      <br />
    </>
  )
}

export default StashCard
