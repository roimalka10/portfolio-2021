import React from "react";
import "./footer.scss";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { RiArrowUpSLine } from "react-icons/ri";

const buttonVariants = {
  hover: {
    scale: 1.15,
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

const Footer = () => {
  return (
    <footer className="footer" id="footer-id">
      <Link to="home-id" spy={true} smooth={true} duration={0}>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="back-to-top"
        >
          <RiArrowUpSLine size={45} />
        </motion.button>
      </Link>
      <div className="content">
        <a className="footer-logo">
          <img
            src="https://res.cloudinary.com/noname-m-/image/upload/v1622245542/images/namelogo_hpncdo.png"
            alt="Roi Malka's Personal Logo"
          />
        </a>
        <div className="footer-links">
          <ul className="links">
            <li>
              <a href="https://www.linkedin.com/in/roi-malka/" target="_blank">
                <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/roimalka10" target="_blank">
                <span>Github</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copy">
          <p>© 2021 Roi Malka - </p>
          <a href="mailto:roimalka10@gmail.com"> Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
