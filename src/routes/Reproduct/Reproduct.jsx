import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './Reproduct.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const Reproduct = () => {
  const { name } = useParams();
  const [musicInfo, setMusicInfo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(`/musics/${name}`));

  const playIcon = useRef(null);
  const pauseIcon = useRef(null);

  useEffect(() => {
    // Função para carregar o arquivo JSON
    const fetchMusicInfo = async () => {
      try {
        // Carregar o JSON localmente (ou via requisição HTTP)
        const response = await fetch('/musics/musics.json'); // Substitua pelo caminho correto do seu arquivo JSON
        const data = await response.json();

        // Verificar se o nome da música existe no JSON
        if (name in data) {
          setMusicInfo(data[name]);
        } else {
          console.error(`Música com nome '${name}' não encontrada.`);
        }
      } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
      }
    };

    fetchMusicInfo();
  }, [name]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      playIcon.current.style.display = "flex";
      pauseIcon.current.style.display = "none";
    } else {
      audioRef.current.play();
      playIcon.current.style.display = "none";
      pauseIcon.current.style.display = "flex";
    }
    setIsPlaying(!isPlaying);
  };

  const pauseMusic = () => {
    audioRef.current.pause();
    playIcon.current.style.display = "flex";
    pauseIcon.current.style.display = "none";
    setIsPlaying(false);
  };

  return (
    <div className='reproduct1'>
      {musicInfo ? (
        <div className='reproduct'>
          <span className='named'>{musicInfo.name}</span>
          <span className='artista'>{musicInfo.artist}</span>
          <img className="foto-msc" src={musicInfo.img} alt={musicInfo.name} style={{ width: '200px', height: '200px' }} />
          <i onClick={togglePlay} className={`bi bi-play-circle-fill ${isPlaying ? 'hidden' : ''}`} ref={playIcon}></i>
          <i onClick={pauseMusic} className={`bi bi-pause-circle-fill ${isPlaying ? '' : 'hidden'}`} ref={pauseIcon}></i>
        </div>
      ) : (
        <p>Carregando informações da música...</p>
      )}
      
    </div>
  );
};

export default Reproduct;
