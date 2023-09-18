import { Suspense, lazy, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const VoteData = lazy(() => import("./components/VoteData"));
const LineChart = lazy(() => import("./components/Graphs/LineChart"));
const LineChart2 = lazy(() => import("./components/Graphs/LineChart2"));
const BarGraph = lazy(() => import("./components/Graphs/BarGraph"));
const ErrorPage = lazy(() => import("./components/Error/ErrorPage"));
const OverAll = lazy(() => import("./components/Graphs/OverAll"));
import { CircularProgress } from "@mui/material";
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress color="secondary" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<AllRoutes />} />
            <Route path="/data" element={<VoteData />} />
            <Route path="/counts" element={<LineChart />} />
            <Route path="/line-chart" element={<LineChart2 />} />
            <Route path="/bar-chart" element={<BarGraph />} />
            <Route path="/over-all" element={<OverAll />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
