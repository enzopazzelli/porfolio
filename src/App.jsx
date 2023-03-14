import { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience'
// import Banner from './components/Banner';
import Contact from './components/Contact';


// import reactLogo from './assets/react.svg'
// import './App.css'

function App() {

  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      
      <SocialLinks />
    </div>
  )
}

export default App
