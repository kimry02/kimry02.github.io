import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <nav className="relative font-monty text-slate-100 min-h-4">
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
        </nav>
    );
}
