import React from "react";
import { Chip } from "@mui/material";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        
        <div className="mb-12">
          <p className="font-semibold text-indigo-400">
            EXPERIENCE & EDUCATION
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            My Journey
          </h2>
        </div>

        <div className="relative border-l border-zinc-800 pl-8">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-zinc-950 bg-indigo-500" />

            <span className="text-sm font-medium text-indigo-400">
              2023 - 2026
            </span>

            <h3 className="mt-2 text-2xl font-bold">
              Bachelor of Computer Applications
            </h3>

            <p className="mt-1 text-zinc-400">
              GLA University, Mathura
            </p>

            <p className="mt-4 leading-7 text-zinc-400">
              Studied computer applications, programming, databases,
              web development and software development fundamentals.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Chip label="JavaScript" size="small" />
              <Chip label="Java" size="small" />
              <Chip label="Python" size="small" />
              <Chip label="DBMS" size="small" />
            </div>
          </motion.div>

          {/* Development */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-[41px] h-5 w-5 rounded-full border-4 border-zinc-950 bg-indigo-500" />

            <span className="text-sm font-medium text-indigo-400">
              2025 - Present
            </span>

            <h3 className="mt-2 text-2xl font-bold">
              Web Development
            </h3>

            <p className="mt-1 text-zinc-400">
              Personal Projects & Development
            </p>

            <p className="mt-4 leading-7 text-zinc-400">
              Developing full-stack and frontend projects using React.js,
              Node.js, Express.js and MongoDB while focusing on responsive
              and user-friendly interfaces.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;