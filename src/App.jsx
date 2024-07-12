import React from 'react';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import Home from './Components/Home';
import HeadBoyGirl from './Components/HeadBoyGirl';
import SportsIncharge from './Components/SportsIncharge';
import CoCircularIncharge from './Components/CoCircularIncharge';
import DisciplineIncharge from './Components/DisciplineIncharge';
import Results from './Components/Result';
import './Components/Style.css'
import Home2 from './Components/Home2';
import ResultContainer from './Components/ResultContainer';
import UltimateHome from './Components/UltimateHome';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route exact path="/headboygirl" element={<HeadBoyGirl />} />
    //     <Route  exactpath="/sportsincharge" element={<SportsIncharge />} />
    //     <Route exact path="/cocircularincharge" element={<CoCircularIncharge />} />
    //     <Route exact path="/disciplineincharge" element={<DisciplineIncharge />} />
    //     <Route  exact path="/results" element={<Results />} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<Home2 />} />
        <Route exact path="/" element={<UltimateHome />} />
        <Route exact path="/results" element={<ResultContainer />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
