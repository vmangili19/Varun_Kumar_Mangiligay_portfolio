"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import the Image component

type Props = object; // Updated type definition

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      description:
        "Netflix 2.0 app that has a Log In and Log Out Authentication with Google. It has a beautiful Home Screen with all the movies looking just like Netflix. There is also a subscription page where you can see your active monthly subscription. We also use Stripe Payments for the monthly Netflix Subscriptions!",
      image: "/Netflix.png",
      technologies: [
        { id: 1, name: "React", image: "/React.png" },
        { id: 2, name: "Tailwind CSS", image: "/tailwind-logo.png" },
        { id: 3, name: "Firebase", image: "/firebase-logo.png" },
        { id: 4, name: "Stripe", image: "/stripe-logo.jpeg" },
      ],
    },
    {
      id: 2,
      title: "Amazon Clone",
      description:
        "A fully functional Amazon clone built with Next.js, Tailwind CSS, and Firebase. It includes features like user authentication, product browsing, and a shopping cart. Stripe integration is used for payments.",
      image: "/amazon-clone.jpeg",
      technologies: [
        { id: 1, name: "Next.js", image: "/Nextjs.png" },
        { id: 2, name: "Tailwind CSS", image: "/tailwind-logo.png" },
        { id: 3, name: "Firebase", image: "/firebase-logo.png" },
      ],
    },
    {
      id: 3,
      title: "Analyse and Visualise the Space Race",
      description:
        "Analyzed and visualized space mission data from 1957 onwards to identify trends and patterns in space exploration. Integrated AWS services for data storage and processing, and added a machine learning component to predict future space missions.",
      image: "/space-race.jpeg",
      technologies: [
        { id: 1, name: "AWS", image: "/AWS.png" },
        { id: 2, name: "Python", image: "/Python.png" },
        { id: 3, name: "TensorFlow", image: "/Tensorflow-logo.png" },
        { id: 4, name: "Scikit-Learn", image: "/scikit-learn-logo.png" },
        { id: 5, name: "PyTorch", image: "/Pytorch-logo.png" },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 min-h-screen"
    >
      {/* Projects Heading */}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-30">
        Projects
      </h3>

      {/* Projects Container */}
      <div className="relative w-full flex overflow-x-auto snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 pt-32">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-6 items-center justify-center p-6 sm:p-10 md:p-20 lg:p-32 h-auto"
          >
            {/* Project Image */}
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-[90%] sm:max-w-[75%] md:max-w-md lg:max-w-lg max-h-[60vh] object-contain flex-shrink-0"
            >
              <Image
                src={project.image}
                alt={`${project.title} Image`}
                width={800} // Set the width
                height={600} // Set the height
                className="object-contain"
              />
            </motion.div>

            {/* Project Details */}
            <div className="space-y-6 px-4 md:px-10 max-w-4xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              {/* Technologies Section */}
              <div className="flex items-center justify-center space-x-4">
                {project.technologies.map((technology) => (
                  <div key={technology.id} className="flex flex-col items-center">
                    <Image
                      src={technology.image}
                      alt={technology.name}
                      width={40} // Set the width
                      height={40} // Set the height
                      className="h-10 w-10"
                    />
                    <span className="text-sm mt-2">{technology.name}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm md:text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Background Skewed Div */}
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 z-10" />
    </motion.div>
  );
}

export default Projects;