import React from "react";
import silatAthlete from "../assets/athlete/silat-athlete.png";
// import speechBubble from "../assets/pixel-speech-bubble.png";
// import { Typewriter } from "react-simple-typewriter";

function SilatPage(){
  
  return(
    <div className="silat">
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