import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
 {
   title: "React Portfolio",
   description:
     "Portfolio is a project that gives overview of me and projects I have built. It's built with functional React components and Chakra UI.",
   getImageSrc: () => require("../images/portfolio.jpg"),
    TechnologiesUsed: "React, Chakra UI",
    Live: "https://github.com",
    Repo: "https://github.com/Oyekunletomide/Ecommerce-React"
  },
  {
    title: "Ecommerce",
    description:
      "This is an Ecommerce website built with React. It works with API. It has order system where you can pick the pictures you like, add to the cart and place am order to checkout.",
    getImageSrc: () => require("../images/Ecoomerce.PNG"),
    TechnologiesUsed: "React, Context-API, UseRef, API ",
    Live: "https://beamish-fudge-d3a789.netlify.app/",
    Repo: "https://github.com/Oyekunletomide/Ecommerce-React"
   },
 {
   title: "Color Scheme Generator",
   description:
     "An app that generates different colors from the API. Built with with HTML, CSS, and vanilla JavaScript.",
   getImageSrc: () => require("../images/ColorGenerator.jpg"),
   TechnologiesUsed: "HTML, CSS, JavaScript, API ",
   Live: "https://willowy-halva-925029.netlify.app",
   Repo: "https://github.com/Oyekunletomide/color-scheme-generator"
  },

 {
   title: "Simple working Calculator",
   description:
     "A simple calculator built with React",
   getImageSrc: () => require("../images/calculator.PNG"),
   TechnologiesUsed: "React, UseRef",
   Live: "https://transcendent-treacle-9d26c7.netlify.app",
   Repo: "https://github.com/Oyekunletomide/Simple-Working-Calculator-React"
  },
];

const ProjectsSection = () => {
 return (
   <FullScreenSection
     backgroundColor="#14532d"
     isDarkBackground
     p={8}
     alignItems="flex-start"
     spacing={8}
   >
     <Heading as="h1" id="projects-section">
       Featured Projects
     </Heading>
     <Box
       display="grid"
       gridTemplateColumns="repeat(2,minmax(0,1fr))"
       gridGap={8}
     >
       {projects.map((project) => (
         <Card
           key={project.title}
           title={project.title}
           description={project.description}
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()}
           TechnologiesUsed={project.TechnologiesUsed}
           Live={project.Live}
           Repo={project.Repo}
         />
       ))}
     </Box>
   </FullScreenSection>
 );
};

export default ProjectsSection;