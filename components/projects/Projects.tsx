"use client";
import React from "react";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";
import Featured from "./Featured";
import Noteworthy from "./Noteworthy";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col justify-center items-center gap-8 overflow-hidden mx-auto py-24 relative"
    >
      <FramerMotionWrapper
        variant="fromBottom"
        className="mx-auto px-2.5 xl:px-20 py-8"
      >
        <div>
          <p>What I can Do</p>
          <h2 className="text-6xl font-bold text-darker">PROJECTS</h2>
        </div>
      </FramerMotionWrapper>

      <Featured
        title="Dating App"
        githubLink="https://github.com/Nicholas-Abell/dating_app"
        liveLink="https://dating-app-nicholas-abell.vercel.app/"
        description="A full stack dating application implementing Next Js server
        actions. Features include: user registration, profile Management,
        messaging, and filtering based on user preferences."
        skills={["NextJs", "MongoDB", "Mongoose"]}
        video="/clipDatingApp.mp4"
      />

      <Featured
        title="Movie Database"
        githubLink="https://github.com/Nicholas-Abell/movie_database"
        liveLink="https://movie-database-4bf43.web.app/"
        description="Curious about upcoming movies and where they are Streaming? This app will tell you. Built in ReactJs with a Firebase backend for user authentication."
        skills={["ReactJs", "Firebase", "Tailwind Css"]}
        video="/clipMovieDatabase.mp4"
        fromRight
      />

      <Featured
        title="Reddit Clone"
        githubLink="https://github.com/Nicholas-Abell/reddit_clone"
        liveLink="https://reddit-clone-4fg5-git-main-nicholas-abell.vercel.app/"
        description="A clone of the popular app. Join or create communities. Built with ReactJs with a firebase for user Authentication and profiles."
        skills={["ReactJs", "Firebase", "Tailwind"]}
        video="/clipRedditClone.mp4"
      />

      <div className="w-full relative bg-light">
        <div className="bg-accent/40 h-[120px] md:h-[320px] w-[100vw] absolute top-10 md:top-0 lg:left-80 left-40 rounded-xl" />
        <FramerMotionWrapper variant="fromLeft">
          <h2 className="text-4xl md:text-6xl pb-4 pt-24 px-4">
            Other Noteworthy Projects
          </h2>
        </FramerMotionWrapper>

        <FramerMotionWrapper variant="fromBottom">
          <div className="w-full max-w-[1980px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 px-4 lg:px-16  xl:px-24 overflow-hidden">
            <Noteworthy
              image="/imageThistle.png"
              title="Thistle & Thorns LLC"
              description="A Squarespace site I designed and built for a local tattoo shop. With a bounce
              rate under 40% the page has 2.7k views in its first three
              months. Currently on call as a webmaster"
              color="from-dark"
              liveLink="https://www.thistleandthornsllc.com/"
            />
            <Noteworthy
              image="/imageSMS.png"
              title="SMS Construction"
              description="A Website I built to help a small town handyman reach more clients. Currently hosted
              on Hostinger. I Set up Google analytics for client and used SEO best practices."
              color="from-dark"
              liveLink="https://smsconstructionandremodeling.com/"
              githubLink="https://github.com/Nicholas-Abell/handy_man"
            />
            <Noteworthy
              image="/imageEverdell.png"
              title="Everdell Calculator"
              description="My first app. A calculator for the ppopular board game Everdell. Built in the Unity game engine in C#. This is still used by me and my family today"
              color="from-dark"
              liveLink="https://darkforceyoda.itch.io/everdell-companion-app"
              githubLink="https://github.com/Nicholas-Abell/Everdell-Point-Tracker"
            />
            <Noteworthy
              image="/imageWordle.jpeg"
              title="WordleClone"
              description="Wordle Clone is a digital rendition of the beloved word puzzle game Wordle. Challenge yourself to uncover a secret five-letter word within six attempts, with helpful feedback after each guess."
              color="from-dark"
              liveLink="https://nicholas-abell.github.io/wordle_clone/"
              githubLink="https://github.com/Nicholas-Abell/wordle_clone"
            />
          </div>
        </FramerMotionWrapper>
      </div>
    </section>
  );
};
export default Projects;
