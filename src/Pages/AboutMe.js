import React from 'react';

export default function AboutMe() {
    return (
        <div className="flex flex-col text-slate-100">
            <div id="intro" className='mt-[200px] translate-y-12 transition duration-1000 ease-in-out opacity-0 font-monty w-full text-5xl place-self-center text-center'>HELLO, MY NAME IS RYAN KIM<span className="animate-pulse">...</span></div>
            <div id="intro2" className='mt-[100px] opacity-0 translate-y-12 transition duration-1000 ease-in-out w-full font-monty place-self-center text-center'>
                I am a student at the University of Michigan majoring in Computer Science, graduating May 2024.

            </div>
            <div id="intro3" className='mt-[300px] mb-[100px] text-md translate-y-12 transition duration-1000 ease-in-out opacity-0 font-monty w-full place-self-center text-center flex flex-col px-[10rem]'>
                <div className='text-lg'>EXPERIENCE</div>
                <div className='mt-5'>Currently, I am in my final year at Michigan. I am an Instructional Aide at the university for an upper-level Computer Science course: EECS484 Database Management Systems</div>
                <div className='mt-[70px] flex space-x-5'>
                    <div className='w-[30%] flex flex-col justify-center'><span>Summer 2023</span><span>Amazon</span></div>
                    <div className="inline-block  min-h-[1em] w-0.5 self-stretch bg-slate-100 opacity-100 dark:opacity-50"></div>
                    <div className='w-[50%]'>This opportunity gave me real industry experience. I had the chance to develop internal tools and features used by thousands of users every day. I got to experience how software is developed in a
                        large tech company first-hand. </div>
                </div>
                <div className='mt-[50px] flex space-x-5'>
                    <div className='w-[30%] flex flex-col justify-center'><span>Summer 2022</span><span>Blue Cross Blue Shield of Michigan</span></div>
                    <div className="inline-block  min-h-[1em] w-0.5 self-stretch bg-slate-100 opacity-100 dark:opacity-50"></div>
                    <div className='w-[50%]'>This internship, I worked on batch job creation, using SQL and Java (SpringBoot). I believe the skills I gained from this experience
                        allowed me to be a top candidate for my Instructional Aide position.</div>
                </div>
            </div>


            <script>
                document.addEventListener("DOMContentLoaded", function() {
                    setTimeout(function () {
                        var intro = document.querySelector('#intro');
                        intro.classList.remove("opacity-0");
                        intro.classList.remove("translate-y-12");
                        setTimeout(function () {
                            var intro2 = document.querySelector('#intro2');
                            intro2.classList.remove("opacity-0");
                            intro2.classList.remove("translate-y-12");
                            setTimeout(function () {
                                var intro2 = document.querySelector('#intro3');
                                intro2.classList.remove("opacity-0");
                                intro2.classList.remove("translate-y-12");

                            }, 100)
                        }, 100)
                    }, 100)
                })
            </script>
        </div>
    )
}