import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

//Para instalar el paquete de redux tutorial en react con typescript:
//npm install @reduxjs/toolkit react-redux


//En este caso, el store en provider contendra todos los states
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          <Link to="/contact"> Contact </Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
