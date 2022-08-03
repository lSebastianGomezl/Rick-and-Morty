/* eslint-disable jsx-a11y/alt-text */
import React from 'react'


export const Card = ({characters}) => {
  return (

    <div className="containerCard">
        {characters.map((item,index) =>(
          <div className="card" key={index}>
              <img className="imgCard" src={item.image} />
              <p>{item.name}</p>
          </div> 
         ))}
    </div>
  )
}
