import React from 'react';
import { rootPath, homePath, footballHistoryPath } from './routes';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppHeader from './components/AppHeader';
import FootballHistory from './pages/history/FootballHistory';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <main>
        <Routes>
          <Route path={footballHistoryPath} element={<FootballHistory />} />
          {[rootPath, homePath, footballHistoryPath].map((path, index) => (
            <Route path={path} element={<Home />} key={index} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
