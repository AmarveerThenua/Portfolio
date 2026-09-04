import React from "react";
import { Chip } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vite"],
    },
  ];

  return (
    <section id="skills" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="font-semibold text-indigo-400">MY SKILLS</p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Technologies I Use
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <h3 className="mb-5 text-xl font-semibold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      color: "#d4d4d8",
                      backgroundColor: "#18181b",
                      border: "1px solid #3f3f46",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;