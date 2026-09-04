import React from "react";
import { Card, CardContent, Chip } from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const About = () => {
  const highlights = [
    {
      icon: <CodeIcon />,
      title: "Development",
      text: "Building responsive and interactive web applications with React.js.",
    },
    {
      icon: <SchoolIcon />,
      title: "Learning",
      text: "Continuously improving my skills in modern frontend technologies.",
    },
    {
      icon: <RocketLaunchIcon />,
      title: "Projects",
      text: "Creating real-world projects to solve practical problems.",
    },
  ];

  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-sm font-semibold text-indigo-400">
            ABOUT ME
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:mt-3 sm:text-4xl lg:text-4xl">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm leading-7 text-zinc-400 sm:text-base sm:leading-7 lg:text-base">
              I'm a passionate Frontend Developer focused on building clean,
              responsive and user-friendly web applications.
            </p>

            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:mt-5 sm:text-base sm:leading-7">
              I work primarily with React.js, JavaScript, HTML, CSS and
              Tailwind CSS. I also have experience working with Node.js,
              Express.js and MongoDB.
            </p>

            {/* Skills */}
            <div className="mt-5 flex flex-wrap gap-2">
              <Chip
                label="React.js"
                size="small"
                sx={{ fontSize: "12px" }}
              />

              <Chip
                label="JavaScript"
                size="small"
                sx={{ fontSize: "12px" }}
              />

              <Chip
                label="Tailwind CSS"
                size="small"
                sx={{ fontSize: "12px" }}
              />

              <Chip
                label="Node.js"
                size="small"
                sx={{ fontSize: "12px" }}
              />

              <Chip
                label="MongoDB"
                size="small"
                sx={{ fontSize: "12px" }}
              />
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="grid gap-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    backgroundColor: "#111111",
                    border: "1px solid #27272a",
                    color: "white",
                    borderRadius: "14px",
                    boxShadow: "none",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      gap: 3,
                      padding: {
                        xs: "14px",
                        sm: "18px",
                      },
                      "&:last-child": {
                        paddingBottom: {
                          xs: "14px",
                          sm: "18px",
                        },
                      },
                    }}
                  >
                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 sm:h-11 sm:w-11">
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-base font-semibold sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-zinc-400 sm:text-sm sm:leading-6">
                        {item.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;