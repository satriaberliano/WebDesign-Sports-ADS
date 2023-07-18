import React, { useState, useEffect } from 'react';
import silatAthlete from '../assets/athlete/silat-athlete.png';
import bangunan from '../assets/img-background/bangunan-3.png';
import batu from '../assets/img-background/batu.png';
import obor1 from '../assets/img-background/obor-gif.gif';
import obor2 from '../assets/img-background/obor-gif.gif';
import obor3 from '../assets/img-background/obor-gif.gif';
import obor4 from '../assets/img-background/obor-gif.gif';
import Typewriter from '../components/TyperWriter';
import AppHeader from "../components/AppHeader";

function SilatPage() {
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
    }, delay * 8);

    const typewriter4Timer = setTimeout(() => {
      setTypewriter4Visible(true);
    }, delay * 14);

    return () => {
      clearTimeout(typewriter1Timer);
      clearTimeout(typewriter2Timer);
      clearTimeout(typewriter3Timer);
      clearTimeout(typewriter4Timer);
    };
  }, []);

  return (
    <div id='silat-page'>
      <AppHeader />
      <div className='silat'>
        <div className='silat-background'>
          <img src={bangunan} alt='bangunan gelap' id='silat-bangunan' />
          <div className='silat-obor-container'>
            <div className='silat-obor-top'>
              <img src={obor1} alt='obor' className='obor' id='silat-obor-1'/>
              <img src={obor2} alt='obor' className='obor' id='silat-obor-2'/>
            </div>
            <div className='silat-obor-bottom'>
              <img src={obor3} alt='obor' className='obor' id='silat-obor-3'/>
              <img src={obor4} alt='obor' className='obor' id='silat-obor-4'/>
            </div>
            <div className='silat-batu-container'>
              <img src={batu} alt='batu' id='silat-batu' />
            </div>
          </div>
        </div>
        <h3>Sejarah Silat di Indonesia</h3>
        <div className='silat-top'>
          <div className='type-writer-wrapper'>
            <>
              {typewriter1Visible && <Typewriter text='Halo!' delay={100} />}
              {typewriter2Visible && (
                <Typewriter text='MARI KITA MULAI MEMPELAJARI' delay={100} />
              )}
              {typewriter3Visible && (
                <Typewriter text='SEJARAH SILAT DI INDONESIA' delay={100} />
              )}
              {typewriter4Visible && (
                <Typewriter text='TEKAN START UNTUK MEMULAI.' delay={100} />
              )}
            </>
          </div>
          <div className='silat-top_text-button'>
            <img src={silatAthlete} alt='athlete silat'></img>
            <a href='/#'>START</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SilatPage;
