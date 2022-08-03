
import React from "react";


export const Input = ({search}) => {


  return (
    <div>
        <h3>Rick and Morty</h3>
        <input onChange={search} type="text" placeholder="Escribe el nombre"></input>
    </div>
  )
}
