import React from 'react';
import ProjectObject from './ProjectObject';
import ps from '../PersonalSiteIMG.PNG';
import nm from '../NotifyMeIMG.PNG';
import st from '../SpeedTyperIMG.PNG';
import pic from '../pictured.PNG';
import stv2 from '../STV2_Image.PNG';
import pug from '../pugbot.PNG';
import pp from '../projectPig.png';

export default function Projects() {
    return (
        <div>
            <h2 id="projecttitle" className='opacity-0 transition duration-1000 ease-in-out m-20 text-center font-monty font-semibold text-slate-100 text-4xl'>PROJECTS</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-10 pb-20">
                <ProjectObject title="Mini Hoop League Tracker"
                    imageSource={pp}
                    techStack="EC2, Java, SpringBoot, React, MongoDB, TypeScript, TailwindCSS"
                    id="g"
                    number="6"
                    link="https://github.com/kimry02/projectPig"
                    desc="A full stack application using a Java backend with the Spring framework and a React-TypeScript frontend. There is a mini hoop league (PIG) for my friends'
                          apartment, but we only have a simple spreadsheet to keep track of player data. To address this issue, I created a website to track player and match data
                          in the style of the NBA.com website. The web application allows CRUD operations to be performed on matches, seasons, users, etc.
                          It was hosted on AWS EC2, but is currently unavailable due to cost. The image above does not have any of the data loaded in."
                />
                <ProjectObject title="Speed Typer v2"
                    imageSource={stv2}
                    techStack="MongoDB, Express.js, React, Node.js, Redux, JWT, TailwindCSS"
                    id="e"
                    number="5"
                    link="https://github.com/kimry02/SpeedTyperV2"
                    desc="The initial Speed Typer was one of my first real coding projects. I sought to give it an update with the new technologies that I've learned. 
                            Once again, utilizes LukePeavy's Random Quote API. Upgraded the first Speed Typer through user authentication with JSON Web Tokens and words per minute (wpm) tracking/storing
                            through MongoDB. Users can now create accounts and save their wpms."
                />
                <ProjectObject title="Pugbot"
                    imageSource={pug}
                    techStack="Javascript, Riot API, Axios, Discord.js, Heroku"
                    id="f"
                    number="6"
                    link="https://github.com/kimry02/pugbot"
                    desc="Pugbot is a Discord bot created for a Discord community that my friends and I are a part of. Pugbot is hosted on Heroku and is only active in our Discord. Currently, it has a simple task of 
                            retrieving information from the Riot API about a user's
                            most recent ranked match of League of Legends. Through asynchronous Javascript and RESTful API interactions through Axios, I was able to create a functional bot that serves its purpose. This project
                            was a great way for me to create an application with utility while gaining more experience and having fun."
                />
                <ProjectObject title="Pictured"
                    imageSource={pic}
                    techStack="Next.js, NextAuth.js, React, TailwindCSS, GraphQL, GraphCMS, Vercel"
                    id="d"
                    number="4"
                    link="https://pictured.vercel.app/"
                    desc="Since 2019, I have been taking one picture a day and uploading it to my separate social media account.
                            I decided to move off of the platform and create a dedicated web application, Pictured. 
                            The application takes advantage of GraphCMS for content management, NextAuth for authenticating valid users to view posts, and React for the frontend. "
                />
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
                    setTimeout(function () {
                        var intro = document.querySelector(`#projecttitle`);
                        intro.classList.remove("opacity-0");
                    }, (100))
                })
            </script>

        </div>
    )
}