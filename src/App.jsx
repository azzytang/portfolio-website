"use client";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import Projects from "./projects/Projects";
import StickmanLife from "./projects/stickman-life/StickmanLife";
import SmartScan from "./projects/smart-scan/SmartScan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/stickman-life" element={<StickmanLife />} />
          <Route
            path="/projects/smart-scan-attendance"
            element={<SmartScan />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
