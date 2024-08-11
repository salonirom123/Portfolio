
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import ProjectsAll from './Components/ProjectsAll';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<ProjectsAll />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
