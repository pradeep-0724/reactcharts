import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactCharts } from './Components/Charts/react-charts';
import { Dropdown } from './Prestious/Components/DropDown/dropdown';
import { LandingPage } from './Varal_Cc/Components/landingPage';
import { ChildCp } from './Varal_Cc/Components/childpage';

function App() {
  return (
    <div className="App">
     {/* <ReactCharts></ReactCharts> */}
     <Dropdown></Dropdown>
     {/* <LandingPage></LandingPage> */}
     {/* <ChildCp></ChildCp> */}
   
    </div>
  );
}

export default App;
