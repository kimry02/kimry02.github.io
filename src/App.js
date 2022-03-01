import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import Projects from './Pages/Projects';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
    return (
        <Router basename={window.location.pathname || ''}>
            <NavBar />
            <div className='overflow-hidden min-h-screen bg-gradient-to-r from-cyan-500 to-sky-800'>
            <Routes>
                <Route path="/" element={<AboutMe />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
            </div>
            <Footer />
        </Router>
    );
    
}

export default App;