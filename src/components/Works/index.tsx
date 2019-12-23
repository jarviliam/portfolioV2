import React, { useState, useEffect } from "react";
import Visibility from "../Visibility/index";
import { fadeOut, fadeIn } from "../../utilities/animationHelper";

import { ReactComponent as CMDSVG } from "../../assets/CMDBlank.svg";
import { ReactComponent as DocumentSVG } from "../../assets/document.svg";
import { ProjectArray } from "../../utilities/projectlist";

const Works = React.forwardRef((props: any, ref: any) => {
  const [displayProject, setProject] = useState();

  useEffect(() => {
    if (displayProject !== null) {
      const loader = document.getElementById("load");
      if (loader) {
        fadeIn(loader);
        setTimeout(() => loader.classList.add("d-none"), 2000);
      }
    }
  }, [displayProject]);

  const changeProject = (project: any) => {
    const loader = document.getElementById("load");
    if (loader) {
      fadeOut(loader);
      setProject(project);
    }
  };
  return (
    <section ref={ref} className="works-section">
      <Visibility parentRef={ref}>
        <div className="works-header">
          <h2>Works</h2>
          <div className="below">
            <div className="rect" />
            <div className="box" />
          </div>
        </div>
        <div className="works-container">
          <div className="works-left">
            <div id="load" className="loading" />
            {displayProject ? (
              <div className="project">
                <div className="header">
                  <h2>{displayProject.title}</h2>
                  {displayProject.renderType()}
                </div>
                <div className="main">
                  <p>{displayProject.description}</p>
                </div>
              </div>
            ) : (
              <CMDSVG width={200} />
            )}
          </div>
          <div className="works-right">
            {ProjectArray.map((project, key) => (
              <div key={key} className="project">
                <div className="header">
                  <h2>{project.title}</h2>
                  {project.renderType()}
                </div>
                <div className="main">{project.renderHighlights()}</div>
                <div className="right">
                  <div
                    className="red-button"
                    onClick={() => changeProject(project)}
                  >
                    <span>Read More</span>
                  </div>
                  <div className="code-button">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={project.url}
                    >
                      <DocumentSVG className="document" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Visibility>
    </section>
  );
});

export default Works;
