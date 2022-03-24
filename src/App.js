import './App.css';
import LiveVideos from './components/LiveVideos';
import NavbarHeader from './components/NavbarHeader';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Policies from './components/Policies';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <NavbarHeader />
      <Routes>
        {/*<Route path="/Home" element={<Home />}></Route>*/}
        <Route path="/world-Tv-Live/About" element={<About />}></Route>
        <Route path="/world-Tv-Live/Contact" element={<Contact />}></Route>
        <Route path="/world-Tv-Live/Policies" element={<Policies />}></Route>
        <Route path="/world-Tv-Live/" element={<LiveVideos />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
