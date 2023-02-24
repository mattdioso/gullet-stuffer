//import logo from './logo.svg';
import './App.css';
import './fonts/PhosphateInline.ttf';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import EventsPage from './pages/events';
import HallOfFame from './pages/hof';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/hof" element={<HallOfFame />} />
      </Routes>
    </Router>
    
  );
}

export default App;
