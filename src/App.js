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
import GS6 from './pages/GS6';
import MerchPage from './pages/merch';
import CustomMerchPage from './pages/merch_custom';
import Success from './components/merch_success';
import HomeTwitchPage from './pages/home_twitch';
import GS7 from './pages/GS7';
function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gs7" element={<GS7 />} />
        <Route path="/hof" element={<HallOfFame />} />
        <Route path="/partners" element={<SponsorPage />} />
        <Route path="/merch" element={<CustomMerchPage />} />
        <Route path="/merch2" element={<MerchPage />} />
        <Route path="/merch/success" element={<Success />} />
        {/* <Route path="/twitch" element={<HomeTwitchPage />} /> */}
      </Routes>
    </Router>

  );
}

export default App;
