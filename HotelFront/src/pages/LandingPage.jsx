import React, { Component } from "react";

import landingPage from "../json/landingPage.json";
import Categories from "../parts/Categories";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Testimonial from "../parts/Testimonial";


export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories}></Categories>
        <Testimonial data={landingPage.testimonial}></Testimonial>
        <Footer></Footer>
      </>
    );
  }
}
