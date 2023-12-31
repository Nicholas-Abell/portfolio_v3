"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";
import { useInView } from "framer-motion";

type FeaturedProps = {
  title: string;
  githubLink: string;
  liveLink?: string;
  description: string;
  skills: string[];
  fromRight?: boolean;
  video: string;
};

const Featured: React.FC<FeaturedProps> = ({
  title,
  description,
  liveLink,
  githubLink,
  skills,
  fromRight,
  video,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isInView = useInView(videoRef);

  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShowVideo(true);
      videoRef.current?.play();
    } else {
      setShowVideo(false);
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <div
      className={`w-full flex flex-col gap-4 lg:gap-0 lg:min-h-screen ${
        fromRight
          ? "lg:flex-row bg-gradient-to-r from-dark to-darker text-light"
          : "lg:flex-row-reverse"
      } items-center justify-center px-4 py-4 lg:py-12`}
    >
      <FramerMotionWrapper
        variant={fromRight ? "fromRight" : "fromLeft"}
        className="py-2 lg:hidden"
      >
        <p className={`${fromRight && "text-end"} pb-2`}>Featured Project</p>
        <h3 className={`${fromRight && "text-end"} text-5xl font-semibold`}>
          {title}
        </h3>
      </FramerMotionWrapper>

      <div className="w-full relative border-2 border-black">
        <div
          className={`absolute h-full top-0 left-0 bg-dark z-10 ease-in-out duration-1000 ${
            showVideo ? "w-0" : "w-full"
          }`}
        />
        <video ref={videoRef} muted loop>
          {/* <source src="/video-example.webm" type="video/webm" /> */}
          <source src={video} type="video/mp4" />
          {"Sorry, your browser doesn't support videos."}
        </video>
      </div>

      <div
        className={`lg:w-[90%] lg:h-[420px] gap-2 lg:gap-0 ${
          fromRight ? "lg:ml-[-120px]" : "lg:mr-[-120px]"
        } flex flex-col lg:justify-between z-10`}
      >
        <FramerMotionWrapper
          variant={fromRight ? "fromRight" : "fromLeft"}
          className="py-2 hidden lg:block"
        >
          <p className={`${fromRight && "text-end"} pb-2`}>Featured Project</p>
          <h3 className={`${fromRight && "text-end"} text-5xl`}>{title}</h3>
        </FramerMotionWrapper>

        <div className=" bg-darker shadow-dark text-light py-4 px-4 lg:px-8 rounded-lg z-0 shadow-md">
          <p>{description}</p>
          <div className="w-full">
            <ul className="flex items-center justify-center gap-4 pt-4">
              {skills.map((skill, key) => (
                <li key={key}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`flex items-center gap-4 pb-4 px-4 ${
            fromRight ? "justify-end" : "justify-start"
          } `}
        >
          {liveLink ? (
            <Link
              href={liveLink}
              className="flex flex-col items-center hover:text-gray-400"
            >
              <CgWebsite size={40} />
              <p>Live</p>
            </Link>
          ) : (
            <></>
          )}
          <Link
            href={githubLink}
            className="flex flex-col items-center hover:text-gray-400"
          >
            <FaGithub size={40} />
            <p>Github</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Featured;
