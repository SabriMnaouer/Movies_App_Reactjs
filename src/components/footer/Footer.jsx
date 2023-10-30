import React from "react";
import { homeData } from "../../dummyData";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkedinUrl = "https://www.linkedin.com/in/sabri-mnaouer/";
  const githubUrl = "https://github.com/SabriMnaouer";
  const instagramUrl = "https://www.instagram.com/sabri_mnaouar/";

  return (
    <footer>
      <div className="container">
        <div className="box">
          <ul className="flex">
            <li>Terms of Use</li>
            <li>Privacy-Policy</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Watch List</li>
          </ul>
          <p>
            © {currentYear} SAB.<br></br> All Rights Reserved. All videos and
            shows on this platform are trademarks of, and all related images and
            content are the property of, SAB Inc. Duplication and copy of this
            is strictly prohibited. All rights reserved.
          </p>
        </div>
        <div className="box">
          <h3>Follow Us</h3>
          <a href={linkedinUrl}>
            {" "}
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={githubUrl}>
            {" "}
            <i className="fab fa-github"></i>
          </a>
          <a href={instagramUrl}>
            {" "}
            <i className="fab fa-instagram"></i>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
