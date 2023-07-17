import React from "react";
import soccerAthlete from "../assets/athlete/soccer-athlete.png";
// import speechBubble from "../assets/pixel-speech-bubble.png";
// import { Typewriter } from "react-simple-typewriter";
import rumput from "../assets/img-background/rumput.png";
import tanah from "../assets/img-background/tanah.png";

function SoccerPage(){
  
  return(
    <div className="soccer">
      <div className="soccer-background">
        <img src={rumput} alt="rumput" id="soccer-tanaman"/>
        <div className="soccer-tanah-container">
          <img src={tanah} alt="tanah" id="soccer-tanah"/>
        </div>
      </div>
      <h3>Sejarah Sepak Bola di Indonesia</h3>
      <div className="soccer-top">
        {/* <Typewriter 
          words={["HALO! \nMARI KITA MULAI MEMPELAJARI SEJARAH DARI SEPAK BOLA DI INDONESIA. \nTEKAN START UNTUK MEMULAI."]} 
          loop={false} 
          typeSpeed={80}
          delaySpeed={4000}
          deleteSpeed={0.2} 
        /> */}
        <p>HALO!<br/>
        MARI KITA MULAI MEMPELAJARI SEJARAH<br/>
        DARI SEPAK BOLA DI INDONESIA.<br/>
        TEKAN START UNTUK MEMULAI.</p>
        {/* <img src={speechBubble} alt="speech bubble"></img> */}
        <div className="soccer-top_text-button">
          <img src={soccerAthlete} alt="athlete soccer"></img>
          <a href="/#">START</a>
        </div>
      </div>
      
    </div>
  );
}

export default SoccerPage;