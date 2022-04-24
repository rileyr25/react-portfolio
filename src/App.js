import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import NavBar from './components/global/NavBar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Lab from './components/pages/Lab';
import Single from './components/pages/Single';
import Projects from './components/pages/Projects';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  return (
    <Wrapper>
    <div id='#' className="app bg-slate-200 dark:bg-darkbg dark:text-white pb-14 md:pb-0">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='/projects/:name' element={<Single/>}/>
        <Route path='lab' element={<Lab />}/>
        <Route path='about' element={<About />}/>
      </Routes>
    </div>
    </Wrapper>
  );
}

export default App;
