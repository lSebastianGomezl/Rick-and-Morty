import React from 'react'
import { Card } from '../Card/Card'

export const Main = ({characters}) => {
  return (
    <main>
        <Card characters={characters}/>
    </main>
  )
}
