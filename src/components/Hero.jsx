import React from "react";
import { Button, Chip, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Profile Image
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20 sm:px-6"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/4 z-0 h-60 w-60 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          {/* Availability */}
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

          {/* Hello */}
          <p className="mb-2 text-sm font-medium text-indigo-400 sm:mb-3 sm:text-lg">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Amarveer
            <br />
            <span className="text-zinc-400">Thenua</span>
          </h1>

          {/* Role */}
          <h2 className="mt-4 text-xl font-semibold text-zinc-200 sm:mt-6 sm:text-3xl">
            Frontend Developer
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
            I build modern, responsive and user-friendly web applications
            using React.js, JavaScript, Tailwind CSS and modern UI libraries.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <Button
              variant="contained"
              size="medium"
              endIcon={<ArrowForwardIcon />}
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
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
            >
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-2 sm:mt-8 sm:gap-3">
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
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute h-56 w-56 rounded-full bg-indigo-600/30 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]" />

          {/* Image Container */}
          <div className="relative">
            {/* Gradient Border Glow */}
            <div className="absolute -inset-2 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-70 blur-md" />

            {/* Profile Image */}
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-zinc-800 bg-zinc-900 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <img
                src={profileImage}
                alt="Amarveer Thenua"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;