import React from "react";
import {
  Button,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Projects = () => {
  const projects = [
    {
      title: "FixNear",
      description:
        "A service booking platform that connects users with nearby workers for different services.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/AmarveerThenua/FixNear.git",
      live: "https://fix-near-delta.vercel.app/",
      featured: true,
    },
    {
      title: "Wanderlust",
      description:
        "A hotel, villa and flat booking web application with authentication and property management.",
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS"],
      github: "https://github.com/AmarveerThenua/wanderlust.git",
      live: "#",
    },

  ];

  return (
    <section
      id="projects"
      className="px-4 py-20 sm:px-6 sm:py-24"
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
            MY WORK
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:mt-3 sm:text-4xl lg:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
            Some of the projects I've built while learning and developing
            real-world web applications.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#111111",
                  border: project.featured
                    ? "1px solid #4f46e5"
                    : "1px solid #27272a",
                  color: "white",
                  borderRadius: "16px",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "#6366f1",
                  },
                }}
              >
                <CardContent
                  className="flex h-full flex-col"
                  sx={{
                    padding: {
                      xs: "16px",
                      sm: "20px",
                    },
                    "&:last-child": {
                      paddingBottom: {
                        xs: "16px",
                        sm: "20px",
                      },
                    },
                  }}
                >
                  {/* Featured */}
                  {project.featured && (
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        alignSelf: "flex-start",
                        mb: 2,
                        height: "26px",
                        color: "#c7d2fe",
                        backgroundColor: "#312e81",
                        "& .MuiChip-label": {
                          fontSize: "11px",
                          paddingX: "9px",
                        },
                      }}
                    />
                  )}

                  {/* Project Title */}
                  <h3 className="text-lg font-bold sm:text-xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-xs leading-6 text-zinc-400 sm:text-sm sm:leading-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          height: "26px",
                          color: "#a1a1aa",
                          backgroundColor: "#18181b",
                          border: "1px solid #27272a",
                          "& .MuiChip-label": {
                            paddingX: "8px",
                            fontSize: "10px",
                          },
                        }}
                      />
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-5 flex gap-2">
                    <Button
                      variant="outlined"
                      size="small"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      startIcon={<GitHubIcon />}
                      sx={{
                        minWidth: "auto",
                        padding: {
                          xs: "5px 9px",
                          sm: "6px 11px",
                        },
                        color: "white",
                        borderColor: "#3f3f46",
                        textTransform: "none",
                        fontSize: {
                          xs: "11px",
                          sm: "12px",
                        },
                        borderRadius: "7px",
                      }}
                    >
                      GitHub
                    </Button>

                    <Button
                      variant="contained"
                      size="small"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      endIcon={<OpenInNewIcon />}
                      sx={{
                        minWidth: "auto",
                        padding: {
                          xs: "5px 9px",
                          sm: "6px 11px",
                        },
                        backgroundColor: "#4f46e5",
                        textTransform: "none",
                        fontSize: {
                          xs: "11px",
                          sm: "12px",
                        },
                        borderRadius: "7px",
                        "&:hover": {
                          backgroundColor: "#4338ca",
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;