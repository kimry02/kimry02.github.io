import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <nav className="font-monty bg-sky-900 text-slate-100">
            <div className="mx-auto">
                <div className="flex justify-end">
                    <div className='m-5'>
                        <ul className="hidden md:flex space-x-14">
                        <li className=" relative group hover:text-sky-200">
                            <div className="absolute w-full h-0.5 bg-sky-200 scale-x-0 group-hover:scale-x-100 transition-transform" />
                            <Link to="/">ABOUT ME</Link></li>
                        <li className=' relative group hover:text-sky-200'>
                            <div className="absolute w-full h-0.5 bg-sky-200 scale-x-0 group-hover:scale-x-100 transition-transform" />
                            <Link to="/projects">PROJECTS</Link></li>
                        <li className=' relative group hover:text-sky-200'>
                            <div className="absolute w-full h-0.5 bg-sky-200 scale-x-0 group-hover:scale-x-100 transition-transform" />
                            <Link to="/contact">CONTACT</Link></li>
                        
                        </ul>                            
                        
                    </div>

                </div>
            </div>
        </nav>
    );
}
