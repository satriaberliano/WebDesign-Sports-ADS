import React, { useState, useEffect } from 'react';
import silatAthlete from '../assets/athlete/silat-athlete.png';
import bangunan from '../assets/img-background/bangunan-3.png';
import batu from '../assets/img-background/batu.png';
import obor1 from '../assets/img-background/obor.png';
import obor2 from '../assets/img-background/obor.png';
import obor3 from '../assets/img-background/obor.png';
import obor4 from '../assets/img-background/obor.png';
import Typewriter from '../components/TyperWriter';

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
    <div className='silat'>
      <div className='silat-background'>
        <img src={bangunan} alt='bangunan gelap' id='silat-bangunan' />
        <img src={batu} alt='batu' id='silat-batu' />
        <div className='silat-obor-container'>
          <img src={obor1} alt='obor' className='obor' />
          <img src={obor2} alt='obor' className='obor' />
          <img src={obor3} alt='obor' className='obor' />
          <img src={obor4} alt='obor' className='obor' />
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
  );
}

export default SilatPage;
