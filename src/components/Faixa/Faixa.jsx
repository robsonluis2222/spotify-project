import React from 'react'
import './Faixa.css'

const Faixa = (props) => {
  const img = props.img;
  const musicName = props.musicName;
  const artist = props.artist;
  return (
    <div className='faixa-div'>
        <img src={img} alt="faixa" />
        <div className='especificacoes'>
            <span className='artist-name'>{musicName}</span>
            <span className='artist-artist'>{artist}</span>
        </div>
    </div>
  )
}

export default Faixa