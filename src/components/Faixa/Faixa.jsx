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
            <span className='nome-faixa'>{musicName}</span>
            <span className='artista-faixa'>{artist}</span>
        </div>
    </div>
  )
}

export default Faixa