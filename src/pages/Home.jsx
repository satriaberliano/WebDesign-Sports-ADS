import React from 'react';
import Background from './Background';
import { Link } from 'react-router-dom';
import { sportsPath } from '../routes';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';

function Home() {
  return (
    <>
      <AppHeader />
      <div className='home'>
        <Background />
        <div className='home-container'>
          <h3 className='home-slogan'>
            MARI KITA JELAJAHI
            <br /> SEJARAH OLAHRAGA
            <br /> DI <span>INDONESIA</span>!
          </h3>
          <p className='home-text'>
            Mari kita jelajahi dan gali sejarah dari <br />
            olahraga di seluruh penjuru Nusantara!
          </p>
          <Link to={sportsPath} className='button-mulai-jelajah'>
            <span>Mulai Jelajah</span>
          </Link>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default Home;
