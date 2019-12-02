import React, { Component } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

type State = {};
type Props = {};
class App extends Component<Props, State> {
  public refArray: HTMLDivElement[];
  private setRef: (ref: any) => void;
  constructor(props: Props) {
    super(props);
    this.refArray = [];

    this.setRef = (ref: any) => {
      this.refArray.push(ref);
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ref: number) {
    this.refArray[ref].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  render() {
    return (
      <div className="App">
        <Loader />
        <Navigation handleClick={this.handleClick} />
        <Hero ref={(ref: any) => this.setRef(ref)} />
        <Skills ref={(ref: any) => this.setRef(ref)} />
        <Works ref={(ref: any) => this.setRef(ref)} />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
