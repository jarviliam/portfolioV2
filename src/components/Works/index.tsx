import React, { useEffect, useState } from "react";
import { fadeIn, fadeOut } from "../../utilities/animationHelper";
import Visibility from "../Visibility/index";

import { ReactComponent as CMDSVG } from "../../assets/CMDBlank.svg";
import { ReactComponent as DocumentSVG } from "../../assets/document.svg";
import { ProjectArray } from "../../utilities/projectlist";

const Works = React.forwardRef((props: any, ref: any) => {
  const [displayProject, setProject] = useState();

  useEffect(() => {
    if (displayProject !== undefined) {
      const loader = document.getElementById("load");
      if (loader) {
        fadeIn(loader);
      }
    }
  }, [displayProject]);

  const changeProject = (project: any) => {
    const loader = document.getElementById("load");
    if (loader) {
      fadeOut(loader);
      setTimeout(() => setProject(project), 1000);
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
            <div id="load" className="loading">
              {displayProject ? (
                <div id="test" className="project">
                  <div className="header">
                    <h2>{displayProject.title}</h2>
                    {displayProject.renderType()}
                  </div>
                  <div className="main">
                    <p>{displayProject.description}</p>

                    {displayProject.type === "FrontEnd" && (
                      <div className="tech">
                        <span>Front-End Tech:</span>
                        {displayProject.renderFrontEnd()}
                      </div>
                    )}
                    {displayProject.type === "BackEnd" && (
                      <div className="tech">
                        <span>Back-End Tech:</span>
                        {displayProject.renderFrontEnd()}
                      </div>
                    )}
                    {displayProject.type === "FullStack" && (
                      <div className="tech">
                        <span>Front-End Tech:</span>
                        {displayProject.renderFrontEnd()}
                        <span>Back-End Tech:</span>
                        {displayProject.renderBackEnd()}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <CMDSVG width={200} />
              )}
            </div>
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
