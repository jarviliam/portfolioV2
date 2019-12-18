import React, { useState } from "react";
import { ReactComponent as GitHubSVG } from "../../assets/github-original.svg";
import { ReactComponent as WaveSVG } from "../../assets/waves.svg";

type Props = {
  handleClick: (number: number) => void;
};

const Navigation: React.SFC<Props> = props => {
  const [open, setOpen] = useState(false);

  const style = {
    transform: open ? "translateY(0)" : "translateY(-100%)",
    animationName: open ? "slideDown" : "slideUp",
    animationDuration: "0.5s"
  };
  return (
    <div id="nav" className="navigation">
      <div className="logo-name">
        <h2>Liam Jarvis</h2>
      </div>
      <div className="navigation-contents">
        <div
          className="nav-content-container"
          onClick={() => props.handleClick(0)}
        >
          <h3>Home</h3>
        </div>
        <div
          className="nav-content-container"
          onClick={() => props.handleClick(1)}
        >
          <h3>Skills</h3>
        </div>
        <div
          className="nav-content-container"
          onClick={() => props.handleClick(2)}
        >
          <h3>Work</h3>
        </div>
        <div
          className="nav-content-container"
          onClick={() => props.handleClick(3)}
        >
          <h3>Contact</h3>
        </div>
        <div className="github-container">
          <a
            href="https://github.com/jarviliam"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubSVG width="40px" />
          </a>
        </div>
        <div className="tab-button" onClick={() => setOpen(true)}>
          <span>click</span>
        </div>
      </div>
      <div className="slider" style={style}>
        <div className="slider-menu">
          <div className="slider-head">
            <h2>Liam Jarvis</h2>
            <span onClick={() => setOpen(false)}>Close</span>
          </div>
          <ul>
            <li>
              <span onClick={() => props.handleClick(2)}>Skills</span>
            </li>
            <li>
              <span onClick={() => props.handleClick(3)}>Work</span>
            </li>
            <li>
              <span>
                <a href="">GitHub</a>
              </span>
            </li>
          </ul>
        </div>
        <WaveSVG />
      </div>
    </div>
  );
};

export default Navigation;
