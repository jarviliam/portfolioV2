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

import React from "react";

class Project {
  public title: string;
  public description: string;
  public highlights: any[];
  public frontend: any[];
  public backend: any[];

  constructor(
    title: string,
    description: string,
    highlights: any[],
    frontend: any[],
    backend: any[]
  ) {
    this.title = title;
    this.description = description;
    this.highlights = highlights;
    this.frontend = frontend;
    this.backend = backend;
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
}

const portfolioDesc =
  "Most recent Portfolio that showcases my works on GitHub. Simply a Front-end application that was made with an increased effort to consider UI/UX design in contrast to my last Portfolio project. Focused on building the design utilizing Adobe XD and Illustrator before beginning on any coding of the website.";
export const Portfolio = new Project(
  "Portfolio",
  portfolioDesc,
  [IllustratorSVG, ReactSVG, SassSVG],
  [JavaScriptSVG, HTMLSVG, AdobeXD, IllustratorSVG],
  []
);

const spinThisDesc =
  "A fullstack web application that simulates an E-commerce like store for records. The backend is comprised of an Express server with a MongoDB database. User login and creations are implemented as long as protected routes for each user.";
export const SpinThis = new Project(
  "SpinThis",
  spinThisDesc,
  [ReactSVG, ExpressSVG, MongoDB],
  [HTMLSVG, ReactSVG, ReduxSVG, SassSVG],
  [ExpressSVG, MongoDB]
);

const movieBuffdesc =
  "Frontend project that displays movie information from a public Movie API. Data is stored in a redux store.";
export const MovieBuff = new Project(
  "MovieBuff",
  movieBuffdesc,
  [ReactSVG, ReduxSVG, SassSVG],
  [HTMLSVG, ReactSVG, ReduxSVG, SassSVG],
  []
);

const meigenNowDesc =
  "Most recent Fullstack project that displays Literary quotes with rankings and explanations.";
export const MeigenNow = new Project(
  "MeigenNow",
  meigenNowDesc,
  [TypeScriptSVG, ReactSVG, GraphQL],
  [HTMLSVG, ReactSVG, ReduxSVG, SassSVG, TypeScriptSVG],
  [NodeSVG, ExpressSVG, GraphQL, Firebase, Apollo, Redis]
);
const weatherAppDesc =
  "A simple front-end weather forecast application that retrieves the weather based on location and stores it in Redux.";
export const WeatherApp = new Project(
  "Weather App",
  weatherAppDesc,
  [ReduxSVG, ReactSVG, SassSVG],
  [ReduxSVG, ReactSVG, SassSVG, HTMLSVG, JavaScriptSVG],
  []
);
const portfolioV1Desc =
  "Old portfolio to showcase applications. Redux and React hooks were used to allow for both English and Japanese localization of the website.";
export const PortfolioV1 = new Project(
  "Portfolio V1",
  portfolioV1Desc,
  [SassSVG, ReactSVG, ReduxSVG],
  [HTMLSVG, ReactSVG, SassSVG, ReduxSVG],
  []
);

export const ProjectArray = [Portfolio,SpinThis,MeigenNow,MovieBuff,WeatherApp,PortfolioV1]