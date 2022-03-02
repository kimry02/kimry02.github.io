import { HashRouter, Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import Projects from './Pages/Projects';
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
import ErrorPage from './Pages/ErrorPage';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
    return (
        <Router basename={window.location.pathname || ''}>
            <NavBar />
            <div className='overflow-hidden min-h-[90vh] bg-gradient-to-r from-cyan-500 to-sky-800'>
            <Routes>
                <Route exact path="/" element={<AboutMe />}/>
                <Route exact path="/projects" element={<Projects />}/>
                <Route exact path="/skills" element={<Skills />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
            </div>
            <Footer />
        </Router>
    );
    
}

export default App;