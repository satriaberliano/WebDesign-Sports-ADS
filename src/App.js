import React from 'react';
import {
  rootPath,
  homePath,
  footballHistoryPath,
  silatHistoryPath,
  caturHistoryPath,
  esportHistoryPath,
  badmintonHistoryPath,
} from './routes';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppHeader from './components/AppHeader';
import FootballHistory from './pages/history/FootballHistory';
import SilatHistory from './pages/history/SilatHistory';
import CaturHistory from './pages/history/CaturHistory';
import EsportHistory from './pages/history/EsportHistory';
import BadmintonHistory from './pages/history/BadmintonHistory';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <main>
        <Routes>
          {[rootPath, homePath].map((path, index) => (
            <Route path={path} element={<Home />} key={index} />
          ))}
          <Route path={footballHistoryPath} element={<FootballHistory />} />
          <Route path={silatHistoryPath} element={<SilatHistory />} />
          <Route path={caturHistoryPath} element={<CaturHistory />} />
          <Route path={esportHistoryPath} element={<EsportHistory />} />
          <Route path={badmintonHistoryPath} element={<BadmintonHistory />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
