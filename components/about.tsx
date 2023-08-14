"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Passionate{" "}
        <span className="font-medium">
          {" "}
          Fullstack Eengineer(Frontend Heavy)
        </span>{" "}
        having a proven track record of delivering high-quality end-to-end
        projects. Good problem solver with an aptitude for finding innovative
        solutions to complex challenges and creating user-friendly applications
        that meet the needs of clients.
      </p>
      <p className="mb-3">
        I have industry-level knowledge of Front-end with in-depth working
        experience in technologies such as{" "}
        <span className="font-medium">
          {" "}
          ReactJS, HTML5, CSS3, JavaScript- ES6, AJAX Redux / RTK, ContextAPI,
          React Router, React Query, Tailwind CSS, Styled Components, Webpack
        </span>
        , remarkable web page designs, deploying working software on cloud-based
        services such as AWS, Azure, data structures and algorithms,
        system/component designing.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, and watching Animes. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">UI/UX design psychology</span>. I'm also
        learning how to play ukulele.
      </p>
    </motion.section>
  );
}
