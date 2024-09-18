import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/">
            <motion.a
              className="navbar-brand hero-title text-white"
              href="../index.html"
              initial={{ opacity: 0, x: 1000 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.3,
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: true }}
            >
              <img
                src="../img/logo.png"
                alt=""
                width="130"
                style={{ margin: 0 }}
              />
            </motion.a>
          </Link>
          <button
            className="navbar-toggler"
            style={{
              borderColor: "white",
              background: "linear-gradient(to left, #9056f0, #9346c6, #000)",
              width: 50,
            }}
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNavDropdown1"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <motion.div
            className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`}
            id="navbarNavDropdown1"
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={
              isOpen ? { opacity: 1, y: 0, x: 0 } : { opacity: 1, y: 0, x: 0 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
