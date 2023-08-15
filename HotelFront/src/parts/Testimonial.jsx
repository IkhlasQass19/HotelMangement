import TestimonyAccent from "../assets/images/testimonial-landingpage-frame.png";
import Button from "../elements/Button";
import Star from "../elements/Star";
import Fade from "react-reveal/Fade";

export default function Testimonial({ data }) {
  return (
    <section className="container">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 60 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ width: 365, height: 485, zIndex: 1 }}
              />
              <img
                src={TestimonyAccent}
                alt="Testimonial frame"
                className="position-absolute"
                style={{
                  width: 365,
                  height: 485,
                  margin: `-30px 0 0 -30px`,
                }}
              />
            </div>
          </div>
          <div className="testimonial-content col">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4}></Star>
            <h5 className="h2 font-weight-normal my-3">{data.content}</h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
