
import './App.css';
import Intro from './components/Intro/Intro';
import Career from './components/career/Career';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Projects from './components/project/Projects';
import TubeLight from './components/tubelight/TubeLight';
import TubeLightBG from './components/tubelight/TubeLightBG';

function App() {

  return (
    <>
      <Cursor />
      <TubeLightBG />
      <Intro />
      <Career />
      <Projects />
      <Contact />
      <TubeLight />
    </>

  );
}

export default App;
