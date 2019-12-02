import React from "react";
import {ReactComponent as GitHubSVG} from '../../assets/github-original.svg'
import "./nav-style.scss";

type Props = {
  handleClick: (number: number) => void;
};

const Navigation: React.SFC<Props> = props => {
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
          <h3>About</h3>
        </div>
        <div
          className="nav-content-container"
          onClick={() => props.handleClick(2)}
        >
          <h3>Skills</h3>
        </div>
        <div
          className="nav-content-container"
          onClick={() => props.handleClick(3)}
        >
          <h3>Work</h3>
        </div>
        <div className="github-container">
          <a href="https://github.com/jarviliam" rel="noopener noreferrer" target="_blank"><GitHubSVG width="40px" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
