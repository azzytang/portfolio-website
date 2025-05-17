"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import Projects from "./projects/Projects";
import StickmanLife from "./projects/stickman-life/StickmanLife";
import SmartScan from "./projects/smart-scan/SmartScan";
import PlanPro from "./projects/plan-pro/PlanPro";
import DeepScan from "./projects/deepscan/DeepScan";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setIsLoaded(true);
    };

    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App-container">
        <div className="moving-background" />
        {!isLoaded ? (
          <div className="App-loading" />
        ) : (
          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/projects/stickman-life"
                element={<StickmanLife />}
              />
              <Route
                path="/projects/smart-scan-attendance"
                element={<SmartScan />}
              />
              <Route path="/projects/plan-pro" element={<PlanPro />} />
              <Route path="/projects/deepscan" element={<DeepScan />} />
            </Routes>
            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
