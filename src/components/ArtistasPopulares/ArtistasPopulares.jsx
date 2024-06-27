import React from 'react'
import './ArtistasPopulares.css'

const ArtistasPopulares = (props) => {
    const link = props.link;
    const name = props.name;
  return (
    <div className='artist'>
        <img src={link} alt="artist" />
        <span className='artist-name'>{name}</span>
        <span className='artist-artist'>Artista</span>
    </div>
  )
}

export default ArtistasPopulares