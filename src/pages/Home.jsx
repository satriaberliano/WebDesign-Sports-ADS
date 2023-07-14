import React from 'react';
import Background from './Background';

function Home() {
  return (
    <div className='home'>
      <Background />
      <div className='home-container'>
        <h3 className='home-slogan'>
          MARI KITA JELAJAHI
          <br /> SEJARAH OLAHRAGA
          <br /> <span>DI INDONESIA</span>!
        </h3>
        <p className='home-text'>
          Mari kita jelajahi dan gali sejarah dari <br />
          olahraga di seluruh penjuru Nusantara!
        </p>
        <a href='#id' className='button-mulai-jelajah'>
          <span>Mulai Jelajah</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
