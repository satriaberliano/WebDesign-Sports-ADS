import React from "react";
import silatAthlete from "../assets/athlete/silat-athlete.png";
// import speechBubble from "../assets/pixel-speech-bubble.png";
// import { Typewriter } from "react-simple-typewriter";
import bangunan from "../assets/img-background/bangunan-3.png";
import batu from "../assets/img-background/batu.png";
import obor1 from "../assets/img-background/obor.png";
import obor2 from "../assets/img-background/obor.png";
import obor3 from "../assets/img-background/obor.png";
import obor4 from "../assets/img-background/obor.png";

function SilatPage(){
  
  return(
    <div className="silat">
      <div className="silat-background">
        <img src={bangunan} alt="bangunan gelap" id="silat-bangunan"/>
        <img src={batu} alt="batu" id="silat-batu"/>
        <div className="silat-obor-container">
          <img src={obor1} alt="obor" className="obor"/>
          <img src={obor2} alt="obor" className="obor"/>
          <img src={obor3} alt="obor" className="obor"/>
          <img src={obor4} alt="obor" className="obor"/>
        </div>
      </div>
      <h3>Sejarah Silat di Indonesia</h3>
      <div className="silat-top">
        {/* <Typewriter 
          words={["HALO! MARI KITA MULAI MEMPELAJARI SEJARAH DARI SILAT DI INDONESIA. TEKAN START UNTUK MEMULAI."]} 
          loop={false} 
          typeSpeed={80}
          delaySpeed={4000}
          deleteSpeed={0.2} 
        /> */}
        <p>HALO!<br/>
        MARI KITA MULAI MEMPELAJARI SEJARAH<br/>
        DARI SILAT DI INDONESIA.<br/>
        TEKAN START UNTUK MEMULAI.</p>
        {/* <img src={speechBubble} alt="speech bubble"></img> */}
        <div className="silat-top_text-button">
          <img src={silatAthlete} alt="athlete silat"></img>
          <a href="/#">START</a>
        </div>
      </div>

    </div>
  );
}

export default SilatPage;