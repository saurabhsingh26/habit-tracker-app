import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import Week from "./Week";
import AddHabit from "./AddHabit";
import Navbar from "./Navbar";
import Lists from "./Lists";

const App = () => {
  let habits=useSelector((state)=>state["habits"])
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Lists habits = {habits} />}/>
        <Route path="/add-habit" element={<AddHabit/>}/>
        <Route path="/week-view" element={<Week/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
