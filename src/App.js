import "./Main.css";

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import Portofolio from './Components/Portofolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
