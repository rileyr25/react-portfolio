import { Route, Routes } from 'react-router-dom';
import NavBar from './components/global/NavBar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Lab from './components/pages/Lab';
import Projects from './components/pages/Projects';
import './styles/import.scss';

function App() {
  return (
    <div className="App">

        <NavBar />
    
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
