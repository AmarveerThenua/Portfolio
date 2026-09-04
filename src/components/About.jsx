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
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-semibold text-indigo-400">ABOUT ME</p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-8 text-zinc-400">
              I'm a passionate Frontend Developer focused on building clean,
              responsive and user-friendly web applications.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              I work primarily with React.js, JavaScript, HTML, CSS and
              Tailwind CSS. I also have experience working with Node.js,
              Express.js and MongoDB.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Chip label="React.js" />
              <Chip label="JavaScript" />
              <Chip label="Tailwind CSS" />
              <Chip label="Node.js" />
              <Chip label="MongoDB" />
            </div>
          </motion.div>

          <div className="grid gap-4">
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
                    borderRadius: "16px",
                  }}
                >
                  <CardContent className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-zinc-400">
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