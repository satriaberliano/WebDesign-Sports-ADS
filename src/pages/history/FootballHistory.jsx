import React from 'react';
import '../../styles/history.css';
import bola from '../../assets/img-sejarah/bola.png';
import tali from '../../assets/img-sejarah/tali.png';
import character1 from '../../assets/img-sejarah/footbal-characters/football-ch-1.png';
import character2 from '../../assets/img-sejarah/footbal-characters/football-ch-2.png';
import character3 from '../../assets/img-sejarah/footbal-characters/football-ch-3.png';
import character4 from '../../assets/img-sejarah/footbal-characters/football-ch-4.png';
import FooterHistory from '../../components/FooterHistory';
import BackgroundAwan from '../../components/BackgroundAwan';

const FootballHistory = () => {
  const dataExperience = [
    {
      date: '1914',
      desc: 'Pada masa tersebut, Indonesia masih dijajah Belanda. Kompetisi antar kota dilakukan serta hanya dijuarai dua tim, yaitu Soerabaja City serta Batavia City.',
      img: character1,
    },
    {
      date: '1930',
      desc: 'Pada masa tersebut PSSI atau Persatuan Sepakbola Seluruh Indonesia terbentuk. Persatuan tersebut terbentuk di Yogyakarta serta diketuai oleh Soeratin Sosrosoegondo. Dapat dikatakan PSSI lahir disebabkan karena kepentingan politik bangsa, menentang penjajahan serta strategi untuk memupuk benih nasionalisme di hati pemuda Indonesia dengan menggunakan olahraga sepak bola. ',
      img: character2,
    },
    {
      date: '1951',
      desc: 'Setelah kemerdekaan Indonesia, PSSI secara resmi mengadakan kompetisi yang diberi nama Kejuaraan Nasional (Kejurnas) PSSI. Kompetisi tertua di Indonesia ini telah mengalami banyak pergantian nama, mulai dari Divisi Utama Perserikatan, Galatama, Liga Indonesia, hingga kompetisi yang kita kenal sekarang ini, yaitu Liga 1.',
      img: character3,
    },
    {
      date: 'Sekarang',
      desc: 'PSSI sudah berkembang dengan banyak melakukan perluasan jenis kompetisi dan berbagai pertandingan di bawahnya.',
      img: character4,
    },
    {
      date: '2021',
      desc: 'PSSI sudah berkembang dengan banyak melakukan perluasan jenis kompetisi dan berbagai pertandingan di bawahnya.',
      img: character1,
    },
  ];

  return (
    <div className='sport-container'>
      {/* <div className='background-awan-container'>
        <div className='bg-awan1'>
          <img src={awan} alt='background-awan' className='img-awan1' />
        </div>
        <div className='bg-awan2 '>
          <img src={awan} alt='background-awan' className='img-awan2' />
        </div>
        <div className='bg-awan3'>
          <img src={awan} alt='background-awan' className='img-awan3' />
        </div>
      </div> */}
      <BackgroundAwan />
      <div className='sport-section'>
        <div className='sport-content-1'>
          {dataExperience.map((experience, id, arr) => (
            <div key={id} className='sport-data'>
              {(id + 1) % 2 !== 0 && (
                <>
                  <div className='gambar-kiri'>
                    <img
                      src={experience.img}
                      alt='football character'
                      width='170'
                    />
                  </div>
                  <div>
                    <div className='sport-rounder'>
                      <img src={bola} alt='bola' width='55' />
                    </div>
                    {id + 1 !== arr.length && (
                      <div className='sport-line'>
                        <img src={tali} alt='tali' width='20' />
                      </div>
                    )}
                  </div>
                </>
              )}
              <div key={id} className='data-item'>
                <div className='data-item-content'>
                  <p className='sport-title'>{experience.date}</p>
                  <p className='sport-subtitle'>{experience.desc}</p>
                </div>
              </div>
              {(id + 1) % 2 === 0 && id + 1 !== arr.length && (
                <>
                  <div className='lambang-wrapper'>
                    <div className='sport-rounder'>
                      <img src={bola} alt='bola' width='55' />
                    </div>
                    <div className='sport-line'>
                      <img src={tali} alt='tali' width='20' />
                    </div>
                  </div>
                  <div className='gambar-kiri'>
                    <img
                      src={experience.img}
                      alt='football character'
                      width='170'
                    />
                  </div>
                </>
              )}
              {id + 1 === arr.length && (id + 1) % 2 === 0 && (
                <div className=''>
                  <div className='sport-rounder'>
                    <img src={bola} alt='bola' width='40' />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <FooterHistory />
    </div>
  );
};

export default FootballHistory;
