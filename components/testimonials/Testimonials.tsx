"use client";
import React from "react";
import Card from "./Card";
import FramerMotionWrapper from "../shared/FramerMotionWrapper";

type TestimonialsProps = {};

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-dark to-darker mx-auto px-2.5 md:px-20 py-24">
      <FramerMotionWrapper variant="fromBottom">
        <div className="pb-8 text-center ">
          <p className="text-gray-400">REVIEWS</p>
          <h2 className="text-4xl md:text-6xl font-bold text-light">
            Testimonials
          </h2>
        </div>
      </FramerMotionWrapper>
      <FramerMotionWrapper variant="fromBottom">
        <div className="max-w-[1980px] grid xl:grid-cols-3 py-4 md:gap-4 md:px-0 grid-rows-1 mx-auto">
          <Card
            name="Mary"
            link="https://www.thistleandthornsllc.com/"
            siteTitle="Thistle & Thorns LLC"
            image="/mary-kleine.jpg"
            content="Our site really took off! We didn't know where to start, Nick just took over and a week later our site was live, and our shop was on google maps."
          />
          <Card
            name="Rick"
            image="/rick.jpg"
            content="Nick helped us do things with google sheets I didn't know was possible. Recording information has never been easier."
          />
          <Card
            name="Steve"
            link="https://smsconstructionandremodeling.com/"
            siteTitle="SMS Construction & Remodeling"
            image="/steve.jpg"
            content="The site looks great! I needed a website for my new bussiness and Nick delivered."
          />
        </div>
      </FramerMotionWrapper>
    </section>
  );
};
export default Testimonials;
