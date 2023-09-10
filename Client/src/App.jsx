import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VoteData from "./components/VoteData";
import LineChart from "./components/Graphs/LineChart";
import LineChart2 from "./components/Graphs/LineChart2";
import BarGraph from "./components/Graphs/BarGraph";
import ErrorPage from "./components/Error/ErrorPage";
import OverAll from "./components/Graphs/OverAll";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllRoutes/>}/>
        <Route path="/data" element={<VoteData/>}/>
        <Route path="/counts" element={<LineChart/>}/>
        <Route path="/line-chart" element={<LineChart2/>}/>
        <Route path="/bar-chart" element={<BarGraph/>}/>
        <Route path="over-all" element={<OverAll/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
