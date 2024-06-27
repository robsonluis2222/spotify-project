import React, { useState, useRef, useEffect } from 'react';
import ArtistasPopulares from '../../components/ArtistasPopulares/ArtistasPopulares';
import Faixa from '../../components/Faixa/Faixa';
import { Outlet, Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [enderecoMusica, setEnderecoMusica] = useState(null);

  return (
    <div className='container'>
      <div className='app'>
        <div className='logo'>
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" alt="logo" />
        </div>
        <div className='mais-ouvidas'>
          <span className='title-cont'>Artistas populares #3</span>
          <div className='artistas-populares'>
            <ArtistasPopulares link="https://midias.correiobraziliense.com.br/_midias/jpg/2024/01/31/1000x1000/1_whatsapp_image_2024_01_30_at_16_54_48-34616303.jpeg" name="MC IG" />
            <ArtistasPopulares link="https://yt3.googleusercontent.com/8kfQhs-vVzLR4hDdkbTu1hi251mhmVTMPrugV4UbrEl8n3Pd6_349P9Qwl7yMDK1MXcJ5QMq=s900-c-k-c0x00ffffff-no-rj" name="MC Ryan SP" />
            <ArtistasPopulares link="https://s2-g1.glbimg.com/ZwxMNOBhmV_i_-ouJ0BpZPuOQ0E=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/q/B/2J552TRpmgOLgitphBpw/prt3156-1-.jpg" name="Oruam" />
          </div>
        </div>
        <div className='cont2'>
          <span className='faixas-para-vc'>Faixas para você</span>
          <div className='faixas'>
            <Link className="link-style" to='/reproduct/modoesquece.mp3'>
            <div className='faixa'>
              <Faixa
                img="https://i.scdn.co/image/ab67616d00001e02535c1a6270af5430a2c90b07"
                musicName="Modo Esquece"
                artist="MC Menor da VG e Mc IG"
              />
            </div>
            </Link>
            <Link className="link-style" to='/reproduct/setdobuzeira.mp3'>
            <div className='faixa'>
              <Faixa
                img="https://i1.sndcdn.com/artworks-H8e0qiHqDlb2zn0W-ftzQhw-t500x500.jpg"
                musicName="SET DO BUZEIRA"
                artist="MC Marks e Mc Bruninho da Praia"
              />
            </div>
            </Link>
            <Link className="link-style" to='/reproduct/filhadojornalista.mp3'>
            <div className='faixa'>
              <Faixa
                img="https://i.scdn.co/image/ab67616d0000b27364edffc1d6b3c59761f87963"
                musicName="Filha do Jornalista"
                artist="MC IG"
              />
            </div>
            </Link>
            <Link className="link-style" to='/reproduct/setwesleyalemao2.mp3'>
            <div className='faixa'>
              <Faixa
                img="https://i1.sndcdn.com/artworks-wEozMCM6oFHRVlA9-Ksj7Ug-t500x500.jpg"
                musicName="Set Wesley Alemão 2"
                artist="MC Paulin da Capital e Mc Kadu"
              />
            </div>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
