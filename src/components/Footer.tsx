import React from "react";
import gitURL from "../icons/github.svg";
import linkedinURL from "../icons/linkedin.svg";

export const Footer = () => {
  return (
    <div className="footer__div">
      <div className="social-networks__div">
        <a
          href="https://github.com/alyamba"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <img src={gitURL as string} alt="icon" className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/alogunova/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <img src={linkedinURL as string} alt="icon" className="icon" />
        </a>
      </div>
      <p className="creator">© 2023 by alyamba</p>
    </div>
  );
};
