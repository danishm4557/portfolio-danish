import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/navigation';
import HomePage from './Components/HomePage/homePage';
import Projects from './Components/Projects/projects';
import Footer from '../src/Components/Footer/footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from './Components/Contact/contact';

function App() {
  return (
    <div className="App">
      <div className="">
        <Router>
          <header className="App-header">
            <Navigation />
          </header>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <footer className="App-footer">
            <Footer />
          </footer>
        </Router>
      </div>
    </div>
  );
}

export default App;
