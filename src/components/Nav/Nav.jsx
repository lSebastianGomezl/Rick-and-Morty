import React from 'react'
import { Input } from '../Input/Input'

export const Nav = ({search}) => {
  return (
    <nav>
        <Input search={search}/>
    </nav>
  )
}
