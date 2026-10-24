import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { motion, stagger } from "motion/react";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const handleNavigation = (href) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(5, 5, 5, 0.80)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              delayChildren: stagger(0.15),
            },
          },
        }}
      >
        <Toolbar
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            justify-between
            px-2
            sm:px-5
            md:px-8
            overflow-y-hidden
          "
        >
          {/* Logo */}
          <motion.div
            variants={{
              hidden: {
                y: -50,
                opacity: 0,
              },
              show: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            <button
              onClick={() => handleNavigation("#home")}
              className="
                shrink-0
                cursor-pointer
                text-lg
                font-bold
                tracking-tight
                text-white
                sm:text-xl
                md:text-2xl
              "
            >
              Amar<span className="text-indigo-400">veer</span>
            </button>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex items-center gap-0 sm:gap-1"
            variants={{
              hidden: {},
              show: {
                transition: {
                  delayChildren: stagger(0.15),
                },
              },
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: {
                    y: -50,
                    opacity: 0,
                  },
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
              >
                <Button
                  onClick={() => handleNavigation(item.href)}
                  sx={{
                    minWidth: "auto",
                    padding: {
                      xs: "4px 3px",
                      sm: "6px 6px",
                      md: "6px 10px",
                    },
                    color: "#d4d4d8",
                    textTransform: "none",
                    fontSize: {
                      xs: "9px",
                      sm: "12px",
                      md: "14px",
                    },
                    lineHeight: 1.2,
                    "&:hover": {
                      color: "#818cf8",
                      backgroundColor: "rgba(99,102,241,0.08)",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Resume */}
          <motion.div
            variants={{
              hidden: {
                y: -50,
                opacity: 0,
              },
              show: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            <Button
              variant="outlined"
              href="/resume.pdf"
              target="_blank"
              sx={{
                minWidth: "auto",
                padding: {
                  xs: "4px 6px",
                  sm: "6px 10px",
                  md: "6px 18px",
                },
                color: "white",
                borderColor: "#4f46e5",
                textTransform: "none",
                borderRadius: "7px",
                fontSize: {
                  xs: "9px",
                  sm: "12px",
                  md: "14px",
                },
                "&:hover": {
                  borderColor: "#818cf8",
                  backgroundColor: "rgba(99,102,241,0.08)",
                },
              }}
            >
              Resume
            </Button>
          </motion.div>
        </Toolbar>
      </motion.div>
    </AppBar>
  );
};

export default Navbar;