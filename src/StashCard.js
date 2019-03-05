import React from "react"
import { Link } from "react-router-dom"

const StashCard = props => {
  const { stash } = props

  return (
    <>
      <h2>{stash.name}</h2>
      <Link to={`/stashes/${stash.id}`}><img alt= {stash.name} src={stash.img}/></Link>
      <br />
    </>
  )
}

export default StashCard
