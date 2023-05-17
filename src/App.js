import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/navigation';
import HomePage from './Components/HomePage/homePage';
import Projects from './Components/Projects/projects';
import Footer from '../src/Components/Footer/footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from './Components/Contact/contact';
import Resume from './Components/Resume/resume';
// import Helmet from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>Portfolio - Danish Mohiuddin</title>
          <meta name="description" content="CodeWithDanish is the website name of Danish Mohiuddin's Software Engineering portfolio showcasing many web dev projects and updated resume. Get in touch today using the contact form." />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
      </HelmetProvider>
      <div className="">
        <Router>
          <header className="App-header">
            <Navigation />
          </header>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
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
