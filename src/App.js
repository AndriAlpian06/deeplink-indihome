import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Fmc from './pages/Fmc';
import Jurnalis from './pages/Jurnalis';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Orbit from './pages/Orbit';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='Orbit/source:source&id:id&description:description' element={<Orbit />} />
        <Route path='Fmc/source:source&id:id&description:description' element={<Fmc />} />
        <Route path='Jurnalis/source:source&id:id&description:description' element={<Jurnalis />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
