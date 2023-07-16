import React from 'react';
import '../styles/style.css';
import bola from '../assets/img-sejarah/bola.png';
import tali from '../assets/img-sejarah/tali.png';
import angkatBesi from '../assets/img-background/angkatbesi.png';

const FootballHistory = () => {
  const dataExperience = [
    {
      date: '1914',
      desc: 'Pada masa tersebut, Indonesia masih dijajah Belanda. Kompetisi antar kota dilakukan serta hanya dijuarai dua tim, yaitu Soerabaja City serta Batavia City.',
    },
    {
      date: '1930',
      desc: 'Pada masa tersebut PSSI atau Persatuan Sepakbola Seluruh Indonesia terbentuk. Persatuan tersebut terbentuk di Yogyakarta serta diketuai oleh Soeratin Sosrosoegondo. Dapat dikatakan PSSI lahir disebabkan karena kepentingan politik bangsa, menentang penjajahan serta strategi untuk memupuk benih nasionalisme di hati pemuda Indonesia dengan menggunakan olahraga sepak bola. ',
    },
    {
      date: '1951',
      desc: 'Setelah kemerdekaan Indonesia, PSSI secara resmi mengadakan kompetisi yang diberi nama Kejuaraan Nasional (Kejurnas) PSSI. Kompetisi tertua di Indonesia ini telah mengalami banyak pergantian nama, mulai dari Divisi Utama Perserikatan, Galatama, Liga Indonesia, hingga kompetisi yang kita kenal sekarang ini, yaitu Liga 1.',
    },
    {
      date: 'Sekarang',
      desc: 'PSSI sudah berkembang dengan banyak melakukan perluasan jenis kompetisi dan berbagai pertandingan di bawahnya.',
    },
    {
      date: '2021',
      desc: 'PSSI sudah berkembang dengan banyak melakukan perluasan jenis kompetisi dan berbagai pertandingan di bawahnya.',
    },
  ];

  return (
    <div className='mt-10 mb-20 '>
      <div className='sport-section flex justify-center items-center'>
        <div className='sport-content-1 w-[65%] '>
          {dataExperience.map((experience, id, arr) => (
            <div
              key={id}
              className='sport-data grid grid-cols-[auto] mb-5 xl:mb-0 xl:grid-cols-[1fr_max-content_1fr] gap-0 xl:gap-6  '
            >
              {(id + 1) % 2 !== 0 && (
                <>
                  <div className='flex mx-auto my-auto justify-center items-center w-[120px] h-[120px]'>
                    <img src={angkatBesi} alt='angkatbesi' />
                  </div>
                  <div>
                    <span className='sport-rounder rounded-full w-[40px] hidden xl:block '>
                      <img src={bola} alt='bola' width='45' />
                    </span>
                    {id + 1 !== arr.length && (
                      <span className='sport-line mx-auto xl:block w-[10px] h-full hidden xl:block'>
                        <img src={tali} alt='tali' />
                      </span>
                    )}
                  </div>
                </>
              )}
              <div key={id} className='data-item  mt-5'>
                <div className='data-item-content bg-white text-black dark:bg-slate-900 dark:text-white shadow-md p-2 rounded-lg'>
                  <p className='sport-title font-semibold text-lg'>
                    {experience.date}
                  </p>
                  <p className='sport-subtitle inline-block mb-1'>
                    {experience.desc}
                  </p>
                </div>
              </div>
              {(id + 1) % 2 === 0 && id + 1 !== arr.length && (
                <div>
                  <span className='sport-rounder  rounded-full w-[40px] hidden xl:block'>
                    <img src={bola} alt='bola' width='45' />
                  </span>
                  <span className='sport-line mx-auto hidden xl:block w-[10px] h-full hidden xl:block'>
                    <img src={tali} alt='tali' />
                  </span>
                </div>
              )}
              {id + 1 === arr.length && (id + 1) % 2 === 0 && (
                <div className=''>
                  <span className='sport-rounder  rounded-full w-[40px] hidden xl:block '>
                    <img src={bola} alt='bola' width='45' />
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FootballHistory;
