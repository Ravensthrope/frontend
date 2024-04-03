import React from "react";
import { Home, About, Contact, Projects, Services } from "./routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="!scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
