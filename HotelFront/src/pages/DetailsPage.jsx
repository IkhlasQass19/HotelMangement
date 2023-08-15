import { Component } from "react";

import Fade from "react-reveal/Fade";

import BookingForm from "../parts/BookingForm";
import Categories from "../parts/Categories";
import FeaturedImage from "../parts/FeaturedImage";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import PageDetailDescription from "../parts/PageDetailDescription";
import PageDetailTitle from "../parts/PageDetailTitle";
import Testimonial from "../parts/Testimonial";

import ItemDetails from "../json/ItemDetails";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Testimonial data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
