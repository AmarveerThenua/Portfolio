import React from "react";
import {
  Button,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        
        <div className="mb-12 text-center">
          <p className="font-semibold text-indigo-400">
            GET IN TOUCH
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            I'm currently looking for frontend developer opportunities.
            Feel free to reach out if you'd like to connect.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7"
          >
            <h3 className="text-2xl font-bold">
              Contact Information
            </h3>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:amarveer07354@gmail.com"
                className="flex items-center gap-4 text-zinc-400 transition hover:text-white"
              >
                <EmailIcon className="text-indigo-400" />
                amarveer07354@gmail.com
              </a>

              <a
                href="https://github.com/AmarveerThenua"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-zinc-400 transition hover:text-white"
              >
                <GitHubIcon className="text-indigo-400" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/amarveer-thenua-55735233a/"
                className="flex items-center gap-4 text-zinc-400 transition hover:text-white"
              >
                <LinkedInIcon className="text-indigo-400" />
               
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              sx={textFieldStyle}
            />

            <TextField
              fullWidth
              label="Your Email"
              type="email"
              variant="outlined"
              sx={textFieldStyle}
            />

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={5}
              variant="outlined"
              sx={textFieldStyle}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                borderRadius: "10px",
                backgroundColor: "#4f46e5",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#4338ca",
                },
              }}
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const textFieldStyle = {
  "& .MuiInputLabel-root": {
    color: "#71717a",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#818cf8",
  },
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "#3f3f46",
    },
    "&:hover fieldset": {
      borderColor: "#52525b",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6366f1",
    },
  },
};

export default Contact;