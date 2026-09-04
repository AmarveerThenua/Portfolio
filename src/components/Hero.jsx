import React from "react";
import { Button, Chip, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/4 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <Chip
            label="Available for Frontend Developer Opportunities"
            variant="outlined"
            sx={{
              mb: 4,
              color: "#a5b4fc",
              borderColor: "#4f46e5",
              backgroundColor: "rgba(79,70,229,0.08)",
            }}
          />

          <p className="mb-3 text-lg font-medium text-indigo-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Amarveer
            <br />
            <span className="text-zinc-400">Thenua</span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-zinc-200 sm:text-3xl">
            Frontend Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build modern, responsive and user-friendly web applications
            using React.js, JavaScript, Tailwind CSS and modern UI libraries.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                px: 3,
                py: 1.4,
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
              size="large"
              href="/resume.pdf"
              target="_blank"
              startIcon={<DownloadIcon />}
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                px: 3,
                py: 1.4,
                color: "white",
                borderColor: "#52525b",
              }}
            >
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-3">
            <IconButton
              href="https://github.com/AmarveerThenua"
              target="_blank"
              sx={{
                color: "#a1a1aa",
                "&:hover": { color: "white" },
              }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              href="#"
              target="_blank"
              sx={{
                color: "#a1a1aa",
                "&:hover": { color: "#818cf8" },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </div>
        </motion.div>

        {/* Developer Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="mx-auto max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="font-mono text-sm leading-8 text-zinc-400">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = {"{"}
              </p>

              <p className="pl-5">
                name: <span className="text-green-400">"Amarveer"</span>,
              </p>

              <p className="pl-5">
                role: <span className="text-green-400">"Frontend Developer"</span>,
              </p>

              <p className="pl-5">
                stack: <span className="text-green-400">"React.js"</span>,
              </p>

              <p className="pl-5">
                passion: <span className="text-green-400">"Building UI"</span>
              </p>

              <p>{"};"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;