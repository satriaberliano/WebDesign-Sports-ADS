import React from 'react';
import '../styles/background.css';
import awan from '../assets/img-background/awan.png';
import bangunan1 from '../assets/img-background/bangunan-1.png';
import bangunan2 from '../assets/img-background/bangunan-2.png';
import tanaman1 from '../assets/img-background/tanaman-1.png';
import tanaman2 from '../assets/img-background/tanaman-2.png';
import tanah from '../assets/img-background/tanah.png';

const Background = () => {
  return (
    <div className='background'>
      <div className='background-awan-container'>
        <div className='bg-awan-1'>
          <img src={awan} alt='background-awan' className='img-awan-1' />
        </div>
        <div className='bg-awan-2 '>
          <img src={awan} alt='background-awan' className='img-awan-2' />
        </div>
        <div className='bg-awan-3'>
          <img src={awan} alt='background-awan' className='img-awan-3' />
        </div>
      </div>
      <div className='background-bangunan-container'>
        <div className='bg-bangunan-1'>
          <img src={bangunan1} alt='background-bangunan' />
        </div>
        <div className='bg-bangunan-2'>
          <img src={bangunan2} alt='background-bangunan' />
        </div>
      </div>
      <div className='background-tanaman-container'>
        <img src={tanaman1} alt='background-tanaman' className='bg-tanaman-1' />
        <img src={tanaman2} alt='background-tanaman' className='bg-tanaman-2' />
      </div>

      <div className='background-tanah-container'>
        <img
          src={tanah}
          alt='background-tanah'
          className='bg-tanah bg-tanah-1'
        />
        <img
          src={tanah}
          alt='background-tanah'
          className='bg-tanah'
          height='150px'
        />
      </div>
    </div>
  );
};

export default Background;
