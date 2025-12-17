import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Competencies />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;