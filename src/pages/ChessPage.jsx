import React, { useState, useEffect } from 'react';
import chessAthlete from '../assets/athlete/chess-athlete.png';
import Typewriter from '../components/TyperWriter';
import AppHeader from "../components/AppHeader";
import bangunan from '../assets/img-background/bangunan-4.png';
import tanah from "../assets/img-background/tanah-2.png";


function ChessPage() {
  const [typewriter1Visible, setTypewriter1Visible] = useState(false);
  const [typewriter2Visible, setTypewriter2Visible] = useState(false);
  const [typewriter3Visible, setTypewriter3Visible] = useState(false);
  const [typewriter4Visible, setTypewriter4Visible] = useState(false);

  useEffect(() => {
    const delay = 500; // Waktu penundaan antara munculnya setiap Typewriter (ms)

    const typewriter1Timer = setTimeout(() => {
      setTypewriter1Visible(true);
    }, delay);

    const typewriter2Timer = setTimeout(() => {
      setTypewriter2Visible(true);
    }, delay * 2.5);

    const typewriter3Timer = setTimeout(() => {
      setTypewriter3Visible(true);
    }, delay * 10);

    const typewriter4Timer = setTimeout(() => {
      setTypewriter4Visible(true);
    }, delay * 15);

    return () => {
      clearTimeout(typewriter1Timer);
      clearTimeout(typewriter2Timer);
      clearTimeout(typewriter3Timer);
      clearTimeout(typewriter4Timer);
    };
  }, []);

  return (
    <div id='chess-page'>
      <AppHeader />
      <div className='chess'>
        <div className='chess-background'>
          <img src={bangunan} alt='bangunan terang' id='chess-bangunan'/>
        <div className='chess-batu-container'>
          <img src={tanah} alt='tanah' id='chess-tanah'/>
        </div>
        </div>
        <h3>Sejarah Catur di Indonesia</h3>
        <div className='chess-top'>
          <div className='type-writer-wrapper'>
            <>
              {typewriter1Visible && <Typewriter text='Halo!' delay={100} />}
              {typewriter2Visible && (
                <Typewriter text='MARI KITA MULAI MEMPELAJARI SEJARAH' delay={100} />
              )}
              {typewriter3Visible && (
                <Typewriter text='DARI CATUR DI INDONESIA' delay={100} />
              )}
              {typewriter4Visible && (
                <Typewriter text='TEKAN START UNTUK MEMULAI.' delay={100} />
              )}
            </>
          </div>
          <div className='chess-top_text-button'>
            <img src={chessAthlete} alt='bidak catur'></img>
            <a href='/#'>START</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChessPage;
