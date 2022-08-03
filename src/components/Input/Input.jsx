
import React from "react";


export const Input = ({search}) => {


  return (
    <div>
        <h1>Rick and Morty</h1>
        <input onChange={search} type="text" placeholder="Search..."></input>
    </div>
  )
}
