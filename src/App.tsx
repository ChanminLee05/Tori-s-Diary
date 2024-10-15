import React from 'react';
import './App.css';
import CoverPage from "./Page/CoverPage/CoverPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DiaryPage from "./Page/OpenedPage/DiaryPage";

function App() {
  return (
      <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<CoverPage/>}/>
                <Route path="/diary" element={<DiaryPage/>} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
