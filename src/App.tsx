import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Global } from "@emotion/react";
import { globalStyles } from "@styles/globalStyles";
import Start from "@pages/Start";
import Play from "@pages/Play";
import Game from "@pages/Game";
import Ready from "@pages/Ready";
import Results from "@pages/Results";

const App: React.FC = () => {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<Navigate to="/start" replace />} />
        <Route path="/start" element={<Start />} />
        <Route path="/play" element={<Play />} />
        <Route path="/game" element={<Game />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Navigate to="/start" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
