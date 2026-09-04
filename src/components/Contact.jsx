import React from "react";
import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="text-sm font-semibold text-indigo-400">
            GET IN TOUCH
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:mt-3 sm:text-4xl lg:text-4xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
            I'm currently looking for frontend developer opportunities.
            Feel free to reach out if you'd like to connect.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6"
          >
            <h3 className="text-lg font-bold sm:text-xl">
              Contact Information
            </h3>

            <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">

              {/* Email */}
              <a
                href="mailto:amarveer07354@gmail.com"
                className="flex items-center gap-3 text-xs text-zinc-400 transition hover:text-white sm:text-sm"
              >
                <EmailIcon
                  sx={{
                    fontSize: {
                      xs: 19,
                      sm: 21,
                    },
                  }}
                  className="text-indigo-400"
                />
                <span className="break-all">
                  amarveer07354@gmail.com
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AmarveerThenua"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-xs text-zinc-400 transition hover:text-white sm:text-sm"
              >
                <GitHubIcon
                  sx={{
                    fontSize: {
                      xs: 19,
                      sm: 21,
                    },
                  }}
                  className="text-indigo-400"
                />
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/amarveer-thenua-55735233a/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-xs text-zinc-400 transition hover:text-white sm:text-sm"
              >
                <LinkedInIcon
                  sx={{
                    fontSize: {
                      xs: 19,
                      sm: 21,
                    },
                  }}
                  className="text-indigo-400"
                />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name */}
            <div className="mb-4">
              <TextField
                fullWidth
                size="small"
                label="Your Name"
                variant="outlined"
                sx={textFieldStyle}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <TextField
                fullWidth
                size="small"
                label="Your Email"
                type="email"
                variant="outlined"
                sx={textFieldStyle}
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <TextField
                fullWidth
                size="small"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                sx={textFieldStyle}
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="medium"
              sx={{
                py: {
                  xs: 1,
                  sm: 1.2,
                },
                borderRadius: "9px",
                backgroundColor: "#4f46e5",
                textTransform: "none",
                fontWeight: 600,
                fontSize: {
                  xs: "12px",
                  sm: "13px",
                },
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
    fontSize: {
      xs: "12px",
      sm: "13px",
    },
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#818cf8",
  },

  "& .MuiOutlinedInput-root": {
    color: "white",
    fontSize: {
      xs: "12px",
      sm: "13px",
    },

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