import IconCities from "../assets/images/icons/ic_cities.svg";
import IconTraveler from "../assets/images/icons/ic_traveler.svg";
import IconTreasure from "../assets/images/icons/ic_treasure.svg";
import ImageHero_ from "../assets/images/img-hero-frame.png";
import ImageHero from "../assets/images/img-hero.png";

import Button from "../elements/Button";
import Fade from "react-reveal/Fade";

import formatNumber from "../utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-item-center">
          <div className="col-auto pr-4" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-4">
              Travel the World,
              <br />
              TravelTribe!
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              Book your hotels and vacation packages <br />
              for thousands of destinations across <br />
              the world at TravelerTribe.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
              style={{ marginTop: 20 }}
            >
              Show Me Now
            </Button>
            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src={IconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src={IconTreasure}
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-5" style={{ marginTop: 30, marginLeft: 10 }}>
            <div style={{ width: 553, height: 490 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{
                  width: 513,
                  height: 450,
                  margin: "-30px 0 0 -30px",
                  zIndex: 1,
                }}
              />
              <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ width: 513, height: 450, margin: "0 -15px -15px -0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
