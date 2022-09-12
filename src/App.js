import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import BotInditaFB from './pages/BotInditaFB';
import BotInditaWeb from './pages/BotInditaWeb';
import Fmc from './pages/Fmc';
import Profile from './pages/Profile';
import Jurnalis from './pages/Jurnalis';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='Profile/source:source&id:id&description:description' element={<Profile />} />
        <Route path='BotInditaFB/source:source&id:id&description:description' element={<BotInditaFB />} />
        <Route path='BotInditaWeb/source:source&id:id&description:description' element={<BotInditaWeb />} />
        <Route path='Fmc/source:source&id:id&description:description' element={<Fmc />} />
        <Route path='Jurnalis/source:source&id:id&description:description' element={<Jurnalis />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
