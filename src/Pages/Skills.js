import React from 'react';
import SkillsPageObject from './SkillsPageObject';

export default function Skills(){
    return(
        <div className="m-20 text-monty text-sky-600">
            <div className="pt-10 grid sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-2 gap-20 px-10 pb-20">
                <figure id="lang" className=" opacity-0 translate-y-12 transition duration-1000 ease-in-out bg-slate-100 flex flex-col rounded-xl">
                        <div className="p-2 font-semibold">Languages</div>
                        <hr className=""></hr>
                        <div className="flex flex-row flex-wrap pt-2 mx-8 mb-8 mt-2">
                            <SkillsPageObject name="C++" />
                            <SkillsPageObject name="JavaScript" />
                            <SkillsPageObject name="Python" />
                            <SkillsPageObject name="HTML/CSS" />     
                        </div>
                </figure>
                <figure id="tech" className=" opacity-0 translate-y-12 transition duration-1000 ease-in-out bg-slate-100 flex flex-col rounded-xl">
                        <div className="p-2 font-semibold">Tools and Technologies</div>
                        <hr className=""></hr>
                        <div className="flex flex-row flex-wrap pt-2 mx-8 mb-8 mt-2">
                            <SkillsPageObject name="React" />
                            <SkillsPageObject name="SASS" />
                            <SkillsPageObject name="VS Code" />
                            <SkillsPageObject name="PyCharm" />
                            <SkillsPageObject name="Tailwind CSS" />
                            <SkillsPageObject name="Node (NPM)" />
                            <SkillsPageObject name="Git/GitHub" />
                            <SkillsPageObject name="Bash CLI" />
                        </div>
                </figure>

                <script>
                document.addEventListener("DOMContentLoaded", function() {
                    setTimeout(function(){
                        var intro = document.querySelector('#lang');
                        intro.classList.remove("opacity-0");
                        intro.classList.remove("translate-y-12");
                        setTimeout(function(){
                            var intro2 = document.querySelector('#tech');
                            intro2.classList.remove("opacity-0");
                            intro2.classList.remove("translate-y-12");
                                    
                        }, 100)    
                    }, 100)
                })
                </script>
            </div> 
        </div>
    )
}