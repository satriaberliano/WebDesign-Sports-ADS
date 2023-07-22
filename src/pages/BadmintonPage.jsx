import React, { useState, useEffect } from 'react';
import Typewriter from '../components/TyperWriter';
import AppHeader from "../components/AppHeader";
import badmintonAthlete from "../assets/athlete/badminton-athlete.png";
import background from "../assets/img-background/badminton-background.png";
import tanah from "../assets/img-background/tanah-3.png";
import tanaman from "../assets/img-background/tanaman-3.png";

function BadmintonPage() {
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
    }, delay * 16.5);

    return () => {
      clearTimeout(typewriter1Timer);
      clearTimeout(typewriter2Timer);
      clearTimeout(typewriter3Timer);
      clearTimeout(typewriter4Timer);
    };
  }, []);

  return (
    <div id='bulutangkis-page'>
      <AppHeader />
      <div className='bulutangkis'>
        <div className='bulutangkis-background'>
          <img src={background} alt='bulu tangkis background' id='bulutangkis-background'/>
          <div className='esports-tanaman-container'>
            <div className='esports-tanaman'>
              <img src={tanaman} alt='tanaman' id='esports-tanaman-kiri'/>
              <img src={tanaman} alt='tanaman' id='esports-tanaman-kanan'/>
            </div>
          </div>
        </div>
        <h3>Sejarah Badminton di Indonesia</h3>
        <div className='bulutangkis-top'>
          <div className='type-writer-wrapper'>
            <>
              {typewriter1Visible && <Typewriter text='Halo!' delay={100} />}
              {typewriter2Visible && (
                <Typewriter text='MARI KITA MULAI MEMPELAJARI SEJARAH' delay={100} />
              )}
              {typewriter3Visible && (
                <Typewriter text='DARI BULU TANGKIS DI INDONESIA' delay={100} />
              )}
              {typewriter4Visible && (
                <Typewriter text='TEKAN START UNTUK MEMULAI.' delay={100} />
              )}
            </>
          </div>
          <div className='bulutangkis-top_text-button'>
            <img src={badmintonAthlete} alt='badminton athlete'></img>
            <a href='/#'>START</a>
          </div>
        </div>
        {/* <div className='esports-tanaman-container'>
          <img src={tanaman} alt='tanaman' className='esports-tanaman-kiri'/>
          <img src={tanaman} alt='tanaman' className='esports-tanaman-kanan'/>
        </div> */}
        <div className='esports-batu-container'>
          <img src={tanah} alt='batu' id='esports-batu'/>
        </div>
      </div>
    </div>
  );
}

export default BadmintonPage;
