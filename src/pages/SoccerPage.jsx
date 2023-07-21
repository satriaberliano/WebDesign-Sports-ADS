import React, { useEffect, useState } from "react";
import soccerAthlete from "../assets/athlete/soccer-athlete.png";
import rumput from "../assets/img-background/rumput.png";
import tanah from "../assets/img-background/tanah.png";
import Typewriter from "../components/TyperWriter";
import AppHeader from "../components/AppHeader";

function SoccerPage(){
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


  return(
    <>
      <AppHeader />
      <div className="soccer">
        <div className="soccer-background">
          <img src={rumput} alt="rumput" id="soccer-rumput"/>
          <div className="soccer-tanah-container">
            <img src={tanah} alt="tanah" id="soccer-tanah"/>
          </div>
        </div>
        <h3>Sejarah Sepak Bola di Indonesia</h3>
        <div className="soccer-top">
          <div className='type-writer-wrapper'>
            <>
              {typewriter1Visible && <Typewriter text='Halo!' delay={100} />}
              {typewriter2Visible && (
                <Typewriter text='MARI KITA MULAI MEMPELAJARI SEJARAH' delay={100} />
              )}
              {typewriter3Visible && (
                <Typewriter text='SEPAK BOLA DI INDONESIA' delay={100} />
              )}
              {typewriter4Visible && (
                <Typewriter text='TEKAN START UNTUK MEMULAI.' delay={100} />
              )}
            </>
          </div>
          <div className="soccer-top_text-button">
            <img src={soccerAthlete} alt="athlete soccer"></img>
            <a href="/#">START</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoccerPage;