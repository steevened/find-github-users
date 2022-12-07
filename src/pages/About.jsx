import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';

const About = () => {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col px-10 py-8 bg-base-300 shadow-lg text-neutral-content w-4/5 max-w-sm">
      <h1 className="text-5xl font-bold text-center mb-5">Users Finder</h1>
      <div className="text-center flex flex-col gap-3">
        <p>A React app to search GitHub profiles.</p>
        <p>Version 1.0.0</p>
        <p>Made by Steven Alvarado</p>
        <div className="flex items-center justify-center gap-5 text-3xl">
          <a href="https://github.com/steevened" target="_blank">
            <GoMarkGithub />
          </a>
          <a href="https://www.linkedin.com/in/steevened/" target="_blank">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
