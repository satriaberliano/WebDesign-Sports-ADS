import React from 'react';
import {
  rootPath,
  homePath,
  footballHistoryPath,
  silatHistoryPath,
  caturHistoryPath,
} from './routes';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppHeader from './components/AppHeader';
import FootballHistory from './pages/history/FootballHistory';
import SilatHistory from './pages/history/SilatHistory';
import CaturHistory from './pages/history/CaturHistory';

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
        </Routes>
      </main>
    </div>
  );
}

export default App;
