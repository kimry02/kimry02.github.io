import React from 'react';

export default function AboutMe(){
    return(
        <div className="grid p-5 grid-rows-[40vh_100px_100px_100px] gap-6">
            <div id="intro" className='translate-y-12 transition duration-1000 ease-in-out row-start-1 opacity-0 row-end-2 font-monty w-full text-5xl text-slate-100 place-self-center text-center'>HELLO, MY NAME IS RYAN KIM<span className="animate-pulse">...</span></div>
            <div id="intro2" className='opacity-0 translate-y-12 transition duration-1000 ease-in-out w-full row-start-2 row-end-3 font-monty text-slate-100 place-self-center text-center'>
                I am a student at the University of Michigan majoring in Computer Science, graduating May 2024.

            </div>
            
            
            
            
            <script>
                document.addEventListener("DOMContentLoaded", function() {
                    setTimeout(function(){
                        var intro = document.querySelector('#intro');
                        intro.classList.remove("opacity-0");
                        intro.classList.remove("translate-y-12");
                        setTimeout(function(){
                            var intro2 = document.querySelector('#intro2');
                            intro2.classList.remove("opacity-0");
                            intro2.classList.remove("translate-y-12");
                                    
                        }, 100)    
                    }, 100)
                })
            </script>
        </div>
    )
}