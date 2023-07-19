import React, { useState, useEffect } from 'react';
import Typewriter from '../components/TyperWriter';
import AppHeader from "../components/AppHeader";
import weightliftingAthlete from "../assets/athlete/weightlifting-athlete.png";
import batu from "../assets/img-background/batu-3.png";
import awan from "../assets/img-background/awan-2.png";

function WeightLiftingPage() {
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
    <div id='angkatbesi-page'>
      <AppHeader />
      <div className='angkatbesi'>
        {/* <div className='angkatbesi-background'>
          <img src={background} alt='angkat besi background' id='angkatbesi-background'/>
          <div className='esports-batu-container'>
            <img src={batu} alt='batu' id='esports-batu'/>
          </div>
        </div> */}
        <div className='angkatbesi-awan-container'>
          <img src={awan} alt='awan malam'/>
        </div>
        <h3>Sejarah Angkat Besi di Indonesia</h3>
        <div className='angkatbesi-top'>
          <div className='type-writer-wrapper'>
            <>
              {typewriter1Visible && <Typewriter text='Halo!' delay={100} />}
              {typewriter2Visible && (
                <Typewriter text='MARI KITA MULAI MEMPELAJARI SEJARAH' delay={100} />
              )}
              {typewriter3Visible && (
                <Typewriter text='DARI ANGKAT BESI DI INDONESIA' delay={100} />
              )}
              {typewriter4Visible && (
                <Typewriter text='TEKAN START UNTUK MEMULAI.' delay={100} />
              )}
            </>
          </div>
          <div className='angkatbesi-top_text-button'>
            <img src={weightliftingAthlete} alt='weight lifting athlete'></img>
            <a href='/#'>START</a>
          </div>
        </div>
        <div className='angkatbesi-batu-container'>
          <img src={batu} alt='batu'/>
        </div>
      </div>
    </div>
  );
}

export default WeightLiftingPage;
