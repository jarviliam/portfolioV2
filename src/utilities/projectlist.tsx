import SassSVG from "../assets/design/sass-original.svg";
import JavaScriptSVG from "../assets/frontend/html5-original.svg";
import HTMLSVG from "../assets/frontend/javascript-original.svg";
import ReactSVG from "../assets/frontend/react-original.svg";
import ReduxSVG from "../assets/frontend/redux-original.svg";
import TypeScriptSVG from "../assets/frontend/typescript-original.svg";

import Apollo from "../assets/backend/apollographql-icon.svg";
import ExpressSVG from "../assets/backend/express-original.svg";
import Firebase from "../assets/backend/firebase.svg";
import GraphQL from "../assets/backend/graphql-icon.svg";
import MongoDB from "../assets/backend/mongodb-original-wordmark.svg";
import NodeSVG from "../assets/backend/nodejs-original.svg";
import Redis from "../assets/backend/redis-plain-wordmark.svg";

import IllustratorSVG from "../assets/design/illustrator-plain.svg";
import AdobeXD from "../assets/design/xd.svg";

import FrontEndSVG from "../assets/FEType.svg";
import FullStackSVG from "../assets/FSType.svg";
import BackEndSVG from "../assets/BEType.svg";

import React from "react";

class Project {
  public title: string;
  public description: string;
  public highlights: any[];
  public frontend: any[];
  public backend: any[];
  public url: string;
  public type: string;

  constructor(
    title: string,
    description: string,
    highlights: string[],
    frontend: string[],
    backend: string[],
    type: string,
    // tslint:disable-next-line: trailing-comma
    url: string
  ) {
    this.title = title;
    this.description = description;
    this.highlights = highlights;
    this.frontend = frontend;
    this.backend = backend;
    this.url = url;
    this.type = type;
  }
  public renderFrontEnd() {
    return this.frontend.map((item, index) => {
      return <img className="svg" alt="FrontEnd" src={item} key={index} />;
    });
  }
  public renderBackEnd() {
    return this.backend.map((item, index) => {
      return <img className="svg" alt="BackEnd" src={item} key={index} />;
    });
  }
  public renderHighlights() {
    return this.highlights.map((item, index) => {
      return <img className="svg" alt="Highlights" src={item} key={index} />;
    });
  }
  public renderType() {
    switch (this.type) {
      case "FrontEnd":
        return <img src={FrontEndSVG} id="proj-type" alt="Front-End Project" />;
      case "BackEnd":
        return <img src={BackEndSVG} id="proj-type" alt="Back-End Project" />;
      case "FullStack":
        return (
          <img src={FullStackSVG} id="proj-type" alt="FullStack Project" />
        );
      default:
        return null;
    }
  }
}

const portfolioDesc =
  "Most recent Portfolio that showcases my works on GitHub. Simply a Front-end application that was made with an increased effort to consider UI/UX design in contrast to my last Portfolio project. Focused on building the design utilizing Adobe XD and Illustrator before beginning on any coding of the website.";
export const Portfolio = new Project(
  "Portfolio",
  portfolioDesc,
  [IllustratorSVG, ReactSVG, SassSVG],
  [JavaScriptSVG, HTMLSVG, AdobeXD, IllustratorSVG],
  [],
  "FrontEnd",
  "https://github.com/jarviliam/portfolioV2"
);

const spinThisDesc =
  "A fullstack web application that simulates an E-commerce like store for records. The backend is comprised of an Express server with a MongoDB database. User login and creations are implemented as long as protected routes for each user.";
export const SpinThis = new Project(
  "SpinThis",
  spinThisDesc,
  [ReactSVG, ExpressSVG, MongoDB],
  [HTMLSVG, ReactSVG, ReduxSVG, SassSVG],
  [ExpressSVG, MongoDB],
  "FullStack",
  "https://github.com/jarviliam/record-store"
);

const movieBuffdesc =
  "Frontend project that displays movie information from a public Movie API. Data is stored in a redux store.";
export const MovieBuff = new Project(
  "MovieBuff",
  movieBuffdesc,
  [ReactSVG, ReduxSVG, SassSVG],
  [HTMLSVG, ReactSVG, ReduxSVG, SassSVG],
  [],
  "FrontEnd",
  "https://github.com/jarviliam/movie-buff"
);

const meigenNowDesc =
  "Most recent Fullstack project that displays Literary quotes with rankings and explanations.";
export const MeigenNow = new Project(
  "MeigenNow",
  meigenNowDesc,
  [TypeScriptSVG, ReactSVG, GraphQL],
  [HTMLSVG, ReactSVG, ReduxSVG, SassSVG, TypeScriptSVG],
  [NodeSVG, ExpressSVG, GraphQL, Firebase, Apollo, Redis],
  "FullStack",
  "https://github.com/jarviliam/meigen-now"
);
const weatherAppDesc =
  "A simple front-end weather forecast application that retrieves the weather based on location and stores it in Redux.";
export const WeatherApp = new Project(
  "Weather App",
  weatherAppDesc,
  [ReduxSVG, ReactSVG, SassSVG],
  [ReduxSVG, ReactSVG, SassSVG, HTMLSVG, JavaScriptSVG],
  [],
  "FrontEnd",
  "https://github.com/jarviliam/Weather-Application"
);
const portfolioV1Desc =
  "Old portfolio to showcase applications. Redux and React hooks were used to allow for both English and Japanese localization of the website.";
export const PortfolioV1 = new Project(
  "Portfolio V1",
  portfolioV1Desc,
  [SassSVG, ReactSVG, ReduxSVG],
  [HTMLSVG, ReactSVG, SassSVG, ReduxSVG],
  [],
  "FrontEnd",
  "https://github.com/jarviliam/portfolio"
);

const WeatheringDesc =
  "Updated weather forcasting frontend application that utilizes two public APIs to display the forecast. The first API is used for location searching that provides latitude and longtitude measurements for the selected city. This information is then forwarded to a second API for the weather information. Animations and Icons were all done by myself.";

export const Weathering = new Project(
  "Weathering",
  WeatheringDesc,
  [SassSVG, ReactSVG, TypeScriptSVG],
  [SassSVG, ReactSVG, TypeScriptSVG],
  [ExpressSVG],
  "FrontEnd",
  ""
);
const BlogAPIdesc = "Blog-APi coded with Ruby on Rails";
export const BlogAPI = new Project(
  "Blog-API",
  BlogAPIdesc,
  [],
  [],
  [],
  "BackEnd",
  ""
);
export const ProjectArray = [
  Portfolio,
  Weathering,
  SpinThis,
  MeigenNow,
  MovieBuff,
  BlogAPI,
  WeatherApp,
  PortfolioV1
];
