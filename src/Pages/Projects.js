import React from 'react';
import ProjectObject from './ProjectObject';
import ps from '../PersonalSiteIMG.PNG';
import nm from '../NotifyMeIMG.PNG';
import st from '../SpeedTyperIMG.PNG';

export default function Projects(){
    return(
        <div>
            <h2 id="projecttitle" className='opacity-0 transition duration-1000 ease-in-out m-20 text-center font-monty font-semibold text-slate-100 text-4xl'>PROJECTS</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-10 pb-20">
            <ProjectObject title="Speed Typer"
                            imageSource={st}
                            techStack="HTML, CSS, JavaScript"
                            id="a"
                            number="1"
                            link="https://github.com/kimry02/SpeedTyper"
                            desc="Typing game created using the listed technologies.
                            Imported LukePeavy's Random Quote API.
                            This project combined my passion for typing and coding."
                            />
            <ProjectObject title="NotifyMe"
                            imageSource={nm}
                            techStack="Python"
                            id="b"
                            number="2"
                            link="https://github.com/kimry02/NotifyMe"
                            desc="Notification Python script for desktop. Created using IMAP tools.
                            Allows for filtering of notifications based off of keywords in the
                            subject line or sender address."
                            />
            <ProjectObject title="Personal Site"
                            imageSource={ps}
                            techStack="React, TailwindCSS"
                            id="c"
                            number="3"
                            link="https://github.com/kimry02/kimry02.github.io"
                            desc="Created a React web application to create a 
                            personal site to display my projects and skills. 
                            Styled with SVGs and the latest technologies."
                            />
            
            
            </div>
        
            <script>
                document.addEventListener("DOMContentLoaded", function() {
                    setTimeout(function(){
                        var intro = document.querySelector(`#projecttitle`);
                        intro.classList.remove("opacity-0");    
                        }, (100))
                    })
            </script>
        
        </div>
    )
}