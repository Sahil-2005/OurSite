import React from 'react';
// import { Hero } from './components/Frontpage';
import Hero from './components/Frontpage/Hero';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer/Footer';
import './App.css';
import ProjectSection from './components/Projects/Project';

function App() {
  return (
    <div className="App">
      <Hero />
      <ProjectSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
