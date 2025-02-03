import './App.css';
import { ParallaxProvider } from "react-scroll-parallax";
import NavBar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <ParallaxProvider>
      <NavBar />
      <Hero />
      <Intro />
      <Footer />
    </ParallaxProvider>
  );
}

export default App;
