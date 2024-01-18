import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <LandingPage />
              <Footer />
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
    
}

export default App;