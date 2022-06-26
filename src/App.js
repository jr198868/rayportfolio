import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Codedemo1 from './Codedemo1';
// import Codedemo2 from './Codedemo2';
import Portfolio from '../src/Portfolio'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Portfolio />}></Route>
                <Route path="/Portfolio" element={<Portfolio />}></Route>
                {/* <Route path="/Codedemo1" element={<Codedemo1 />}></Route>
                <Route path="/Codedemo2" element={<Codedemo2 />}></Route> */}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
