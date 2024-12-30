import React from 'react';
// import { Hero } from './components/Frontpage';
import Hero from './components/Frontpage/Hero';
import ProjectList from './components/Projects/ProjectList';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <ProjectList />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
