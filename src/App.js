import React from "react";
import { rootPath, homePath } from "./routes";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <Routes>
          {[rootPath, homePath].map((path, index) => (
            <Route path={path} element={<Home />} key={index} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
