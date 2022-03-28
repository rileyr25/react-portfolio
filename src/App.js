import { Route, Routes } from 'react-router-dom';
import NavBar from './components/global/NavBar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Lab from './components/pages/Lab';
import Projects from './components/pages/Projects';
import useDarkMode from './hooks/useDarkMode';
import Toggle from './components/global/Toggle';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  
  return (
    <div id='#' className="App bg-slate-200 dark:bg-darkbg dark:text-white">

        <NavBar />
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path='projects' element={<Projects />}/>
          <Route path='lab' element={<Lab />}/>
          <Route path='about' element={<About />}/>
        </Routes>

      </div>
  );
}

export default App;
