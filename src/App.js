import React from "react";
import {
  rootPath,
  homePath,
  sportsPath,
  soccerPath,
  silatPath,
} from "./routes";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import AppHeader from "./components/AppHeader";
import Sports from "./pages/Sports";
import SoccerPage from "./pages/SoccerPage";
import SilatPage from "./pages/SilatPage";

function App() {
  return (
    <div className="App">
      {/* <AppHeader /> */}
      <main>
        <Routes>
          {[rootPath, homePath].map((path, index) => (
            <Route path={path} element={<Home />} key={index} />
          ))}
          <Route path={sportsPath} element={<Sports />} />
          <Route path={soccerPath} element={<SoccerPage />} />
          <Route path={silatPath} element={<SilatPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
