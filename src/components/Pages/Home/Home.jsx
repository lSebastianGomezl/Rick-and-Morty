import React from 'react'
import { Main } from '../../Main/Main';
import { Header }  from '../../Header/Header';
import { Nav } from '../../Nav/Nav';
import image from '../../images/Rick.jpg';

export const Home = ({characters, search}) => {
  return (
    
    <>
        <Header image={image}/>
        <Nav search={search}/>
        <Main characters={characters}/>
    </>
    
  )
}

