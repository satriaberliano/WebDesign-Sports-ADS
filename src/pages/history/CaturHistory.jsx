import React from 'react';
import '../../styles/history.css';
import tali from '../../assets/img-sejarah/tali.png';
import catur from '../../assets/img-sejarah/catur.png';
import obor from '../../assets/img-sejarah/obor.gif';
import bgCatur from '../../assets/img-sejarah/bg-catur.png';
import FooterHistory from '../../components/FooterHistory';
import ArrowUp from '../../components/ArrowUp';

const SilatHistory = () => {
  const dataExperience = [
    {
      date: 'Prasejarah',
      desc: 'Nenek moyang bangsa Indonesia mengembangkan cara pembelaan diri yang menirukan gerakan binatang di alam sekitar. Keterampilan bela diri suku-suku asli Indonesia berkembang melalui berburu dan berperang dengan menggunakan parang, perisai, dan tombak.',
    },
    {
      date: '1100 - 2000 M',
      desc: 'Silat diturunkan secara lisan dan diwariskan dari guru ke murid. Beragam legenda mengenai asal mula silat, seperti legenda Minangkabau yang mengisahkan Datuk Suri Diraja menciptakan silek di Pariangan, Tanah Datar pada abad ke-11.Tokoh persilatan (pendekar) menjadi banggaan di setiap daerah, misalnya Prabu Siliwangi, Hang Tuah, Gajah Mada, dan Si Pitung.',
    },
    {
      date: '1400 - 1900 M',
      desc: 'Penyebaran Islam di Nusantara pada abad ke-14 mempengaruhi perkembangan silat. Pencak silat diajarkan bersama-sama dengan pelajaran agama di surau atau pesantren. Silat menjadi bagian dari latihan spiritual dan budaya dalam beberapa suku bangsa di Indonesia.',
    },
    {
      date: '1700 - 1900 M',
      desc: 'Silat digunakan sebagai ilmu beladiri dalam perjuangan melawan penjajah Belanda. Para pendekar seperti Panembahan Senopati, Sultan Agung, Pangeran Diponegoro, Teungku Chik di Tiro, Teuku Umar, Tuanku Imam Bonjol, Sabai Nan Aluih, Cut Nyak Dhien, dan Cut Nyak Meutia mengangkat senjata dalam perjuangan melawan penjajah.',
    },
    {
      date: '1948 - 1980 M',
      desc: 'Pada tanggal 18 Mei 1948, terbentuklah Ikatan Pencak Silat Indonesia (IPSI) sebagai organisasi pencak silat nasional pertama di Indonesia. Pada 11 Maret 1980, Persatuan Pencak Silat Antarbangsa (Persilat) didirikan atas prakarsa Eddie M. Nalapraya, dan Indonesia bersama Malaysia, Singapura, dan Brunei termasuk pendiri Persilat.',
    },
    {
      date: '2000 M',
      desc: 'Silat diakui sebagai bagian dari budaya Suku Melayu dalam pengertian yang luas, mencakup penduduk pulau Sumatra, Semenanjung Malaka, Jawa, Bali, Kalimantan, Sulawesi, dan pulau-pulau lainnya yang menggunakan bahasa Melayu. Pencak silat menjadi tak terpisahkan dari upacara adat dan kesenian masyarakat di berbagai daerah.',
    },
    {
      date: 'Saat ini',
      desc: 'Perguruan-perguruan silat tumbuh di Amerika Serikat dan Eropa. Silat diakui sebagai cabang olahraga dalam pertandingan internasional, khususnya dipertandingkan dalam ajang SEA Games.',
    },
  ];

  return (
    <div className='sport-container catur-container'>
      <img src={bgCatur} alt='bg-silat' className='bg-catur' />
      <div className='sport-section'>
        <div className='sport-content-1'>
          {dataExperience.map((experience, id, arr) => (
            <div key={id} className='sport-data'>
              {(id + 1) % 2 !== 0 && (
                <>
                  <div className='gambar-kiri'></div>
                  <div>
                    <div className='sport-catur'>
                      <img src={catur} alt='catur' width='50' />
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
                    <div className='sport-catur'>
                      <img src={catur} alt='catur' width='50' />
                    </div>
                    <div className='sport-line'>
                      <img src={tali} alt='tali' width='20' />
                    </div>
                  </div>
                  <div className='gambar-kiri'></div>
                </>
              )}
              {id + 1 === arr.length && (id + 1) % 2 === 0 && (
                <div className=''>
                  <div className='sport-catur'>
                    <img src={catur} alt='catur' width='50' />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ArrowUp />
      <FooterHistory />
    </div>
  );
};

export default SilatHistory;
