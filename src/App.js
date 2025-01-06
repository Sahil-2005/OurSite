import React from 'react';
// import { Hero } from './components/Frontpage';
import Hero from './components/Frontpage/Hero';
import  Navbar  from './components/Navbar/Nav';
import ProjectList from './components/Projects/ProjectList';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProjectList />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
