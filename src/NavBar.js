import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <nav className="relative font-monty bg-sky-900 text-slate-100 min-h-4">
            <div className="mx-auto">
                <div className="flex place-content-end">
                    <div className='m-5'>
                        <ul className="flex space-x-14">
                        <li className=" relative group hover:text-sky-200">
                            <div className="absolute w-full h-0.5 bg-sky-200 scale-x-0 group-hover:scale-x-100 transition-transform" />
                            <Link to="/">ABOUT ME</Link></li>
                        <li className=' relative group hover:text-sky-200'>
                            <div className="absolute w-full h-0.5 bg-sky-200 scale-x-0 group-hover:scale-x-100 transition-transform" />
                            <Link to="/projects">PROJECTS</Link></li>
                        <li className=' relative group hover:text-sky-200'>
                            <div className="absolute w-full h-0.5 bg-sky-200 scale-x-0 group-hover:scale-x-100 transition-transform" />
                            <Link to="/skills">SKILLS</Link></li>
                        
                        </ul>                            
                        
                    </div>

                </div>
            </div>
            <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </nav>
    );
}
