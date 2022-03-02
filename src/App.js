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
            <div className='bg-background'>
            <NavBar />
            <div className='overflow-hidden min-h-[90vh]'>
            <Routes>
                <Route exact path="/" element={<AboutMe />}/>
                <Route exact path="/projects" element={<Projects />}/>
                <Route exact path="/skills" element={<Skills />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
            </div>
            <Footer />
            </div>
        </Router>
    );
    
}

export default App;