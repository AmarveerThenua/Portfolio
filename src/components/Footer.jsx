import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        
        <div>
          <p className="text-lg font-bold">
            Amar<span className="text-indigo-400">veer</span>
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Frontend Developer
          </p>
        </div>

        <p className="text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Amarveer Thenua. All rights reserved.
        </p>

        <div className="flex items-center">
          <IconButton
            href="https://github.com/AmarveerThenua"
            target="_blank"
            sx={{
              color: "#71717a",
              "&:hover": {
                color: "white",
              },
            }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            href="#"
            sx={{
              color: "#71717a",
              "&:hover": {
                color: "#818cf8",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            href="mailto:amarveer07354@gmail.com"
            sx={{
              color: "#71717a",
              "&:hover": {
                color: "#818cf8",
              },
            }}
          >
            <EmailIcon />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;