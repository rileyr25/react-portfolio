import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './normalize-fwd.css'
import './styles/import.scss';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      <Routes>
        <Route />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
