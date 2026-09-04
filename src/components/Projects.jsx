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
      github: "#",
      live: "#",
    },
    {
      title: "Class CR Election",
      description:
        "An online polling system designed for conducting college class representative elections.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-12">
          <p className="font-semibold text-indigo-400">MY WORK</p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Some of the projects I've built while learning and developing
            real-world web applications.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#111111",
                  border: project.featured
                    ? "1px solid #4f46e5"
                    : "1px solid #27272a",
                  color: "white",
                  borderRadius: "18px",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "#6366f1",
                  },
                }}
              >
                <CardContent className="flex h-full flex-col p-6">
                  {project.featured && (
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        alignSelf: "flex-start",
                        mb: 3,
                        color: "#c7d2fe",
                        backgroundColor: "#312e81",
                      }}
                    />
                  )}

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          color: "#a1a1aa",
                          backgroundColor: "#18181b",
                        }}
                      />
                    ))}
                  </div>

                  <div className="mt-7 flex gap-3">
                    <Button
                      variant="outlined"
                      size="small"
                      href={project.github}
                      target="_blank"
                      startIcon={<GitHubIcon />}
                      sx={{
                        color: "white",
                        borderColor: "#3f3f46",
                        textTransform: "none",
                      }}
                    >
                      GitHub
                    </Button>

                    <Button
                      variant="contained"
                      size="small"
                      href={project.live}
                      target="_blank"
                      endIcon={<OpenInNewIcon />}
                      sx={{
                        backgroundColor: "#4f46e5",
                        textTransform: "none",
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