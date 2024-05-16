import { useState } from 'react';
import About from './components/about/About.jsx';
import Campus from './components/campus/Campus.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Hero from './components/hero/Hero.jsx';
import { Navbar } from './components/navbar/Navbar.jsx';
import Programs from './components/programs/Programs.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Title from './components/title/Title.jsx';
import Videoplayer from './components/videoplayer/Videoplayer.jsx';
function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAMS" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </>
  );
}

export default App;
