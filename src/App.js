import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Error from './pages/Error';
import BotInditaFB from './pages/BotInditaFB';
import BotInditaWeb from './pages/BotInditaWeb';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='profile' element={<Profile />} />
        <Route path='BotInditaFB/source:source&id:id&description:description' element={<BotInditaFB />} />
        <Route path='BotInditaWeb/source:source&id:id&description:description' element={<BotInditaWeb />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
