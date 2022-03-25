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
        <Route path="/World-tv-live-hd/About" exact element={<About />}></Route>
        <Route path="/World-tv-live-hd/Contact" exact element={<Contact />}></Route>
        <Route path="/World-tv-live-hd/Policies" exact element={<Policies />}></Route>
        <Route path="/World-tv-live-hd/" exact element={<LiveVideos />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
