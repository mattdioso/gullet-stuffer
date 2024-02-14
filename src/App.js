//import logo from './logo.svg';
import './App.css';
import './fonts/PhosphateInline.ttf';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AltHomePage from './pages/home_test';
import AboutPage from './pages/about';
import EventsPage from './pages/events';
import HallOfFame from './pages/hof';
import SponsorPage from './pages/sponsors';
import HomePage from './pages/home';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/hof" element={<HallOfFame />} />
        <Route path="/sponsors" element={<SponsorPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
