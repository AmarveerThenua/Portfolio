import React from "react";
import { Button, Chip, IconButton } from "@mui/material";
import { motion, stagger } from "motion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import profileImage from "../assets/profile.png";

const Hero = () => {
  const handleProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Parent controls the stagger
  const contentVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: stagger(0.12, {
          startDelay: 0.2,
        }),
      },
    },
  };

  // Common animation for content
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20 sm:px-6"
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="absolute left-1/2 top-1/4 z-0 h-60 w-60 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">

        {/* ================= CONTENT ================= */}

        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          {/* Availability */}
          <motion.div variants={itemVariants}>
            <Chip
              label="Available for Frontend Developer Opportunities"
              size="small"
              variant="outlined"
              sx={{
                mb: 3,
                color: "#a5b4fc",
                borderColor: "#4f46e5",
                backgroundColor: "rgba(79,70,229,0.08)",
                fontSize: {
                  xs: "9px",
                  sm: "11px",
                  md: "13px",
                },
              }}
            />
          </motion.div>

          {/* Hello */}
          <motion.p
            variants={itemVariants}
            className="mb-2 text-sm font-medium text-indigo-400 sm:mb-3 sm:text-lg"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Amarveer
            <br />
            <span className="text-indigo-400">Thenua</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-xl font-semibold text-zinc-200 sm:mt-6 sm:text-3xl"
          >
            Frontend Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8"
          >
            I build modern, responsive and user-friendly web applications
            using React.js, JavaScript, Tailwind CSS and modern UI libraries.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4"
          >
            <Button
              variant="contained"
              size="medium"
              endIcon={<ArrowForwardIcon />}
              onClick={handleProjects}
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                px: {
                  xs: 2,
                  sm: 3,
                },
                py: {
                  xs: 1,
                  sm: 1.4,
                },
                fontSize: {
                  xs: "12px",
                  sm: "15px",
                },
                backgroundColor: "#4f46e5",
                "&:hover": {
                  backgroundColor: "#4338ca",
                },
              }}
              component={motion.button}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              View Projects
            </Button>

            <Button
              variant="outlined"
              size="medium"
              href="/resume.pdf"
              target="_blank"
              startIcon={<DownloadIcon />}
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                px: {
                  xs: 2,
                  sm: 3,
                },
                py: {
                  xs: 1,
                  sm: 1.4,
                },
                fontSize: {
                  xs: "12px",
                  sm: "15px",
                },
                color: "white",
                borderColor: "#52525b",
              }}
              component={motion.a}
              whileHover={{
                scale: 1.05,
                borderColor: "#818cf8",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center gap-2 sm:mt-8 sm:gap-3"
          >
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <IconButton
                href="https://github.com/AmarveerThenua"
                target="_blank"
                rel="noreferrer"
                sx={{
                  color: "#a1a1aa",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <IconButton
                href="https://www.linkedin.com/in/amarveer-thenua-55735233a/"
                target="_blank"
                rel="noreferrer"
                sx={{
                  color: "#a1a1aa",
                  "&:hover": {
                    color: "#818cf8",
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= PROFILE IMAGE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            x: 80,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-56 w-56 rounded-full bg-indigo-600/30 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]"
          />

          {/* Image Container */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Gradient Border Glow */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-2 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-70 blur-md"
            />

            {/* Profile Image */}
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-zinc-800 bg-zinc-900 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <img
                src={profileImage}
                alt="Amarveer Thenua"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
