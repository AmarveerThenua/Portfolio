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
    <section
      id="skills"
      className="bg-zinc-950 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-sm font-semibold text-indigo-400">
            MY SKILLS
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:mt-3 sm:text-4xl lg:text-4xl">
            Technologies I Use
          </h2>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5"
            >
              {/* Group Title */}
              <h3 className="mb-4 text-base font-semibold sm:text-lg">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      color: "#d4d4d8",
                      backgroundColor: "#18181b",
                      border: "1px solid #3f3f46",
                      height: {
                        xs: "28px",
                        sm: "30px",
                      },
                      "& .MuiChip-label": {
                        paddingLeft: {
                          xs: "8px",
                          sm: "9px",
                        },
                        paddingRight: {
                          xs: "8px",
                          sm: "9px",
                        },
                        fontSize: {
                          xs: "11px",
                          sm: "12px",
                        },
                      },
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