import { BrowserRouter } from "react-router-dom" ;
  
import { Navbar, Hero, About, Tech, Works, Experience , Contact, Achievements, Footer } from "./components";
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from "./components/canvas";
import React from "react";  

function App() {
  return (
  <BrowserRouter>
  <div className="relative z-0 bg-primary">
    <div className="bg-hero bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience/>
    <Tech />
    <Works />
    <Achievements />
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
         <Footer />
        </div>
       
        </div>
  </BrowserRouter>
  )
}

export default App
