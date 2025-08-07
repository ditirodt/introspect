import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import WhoWeServe from './components/WhoWeServe';
import Journey from './components/Journey';
import Impact from './components/Impact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <WhoWeServe />
      <Journey />
      <Impact />
      <Footer />
    </div>
  );
}

export default App;