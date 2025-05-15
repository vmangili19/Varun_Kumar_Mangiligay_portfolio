"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = object; // Updated type definition

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-10 mt-40 md:mt-0">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/NewYork.jpg"
          className="flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-base md:text-lg">
            I&apos;m Varun Kumar Mangiligay, a Full-Stack Developer and Software Engineer specializing in scalable applications, automation, and AI-driven solutions. 
            With experience in Python, Flask, React.js, and Web3, I&apos;ve developed e-commerce platforms, blog apps, and REST APIs. 
            I&apos;m skilled in building Selenium bots, working with blockchain technologies like NFT marketplaces, and leveraging data science tools such as Google Trends, Pandas, and Plotly for insights.
            I lead teams to improve software performance and business operations while mentoring aspiring developers through hands-on projects. 
            My expertise spans Node.js, Express.js, PostgreSQL, Flask, AWS, and machine learning. 
            I&apos;m passionate about optimizing solutions through object-oriented programming and data structures. 
            I&apos;m always eager to collaborate, innovate, and drive technological advancements.
          </p>
        </div>
      </div>
    </motion.div>
  );
}