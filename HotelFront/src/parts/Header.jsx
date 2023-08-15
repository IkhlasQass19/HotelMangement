import Button from "../elements/Button";
import BrandIcon from "../parts/IconText";
import Fade from "react-reveal/Fade";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? " active" : "";
  };

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button
                    as="{NavLink}"
                    className="nav-link"
                    type="link"
                    to="/"
                    exact
                  >
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button
                    as="{NavLink}"
                    className="nav-link"
                    type="link"
                    to="/"
                    exact
                  >
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button
                    as="{NavLink}"
                    className="nav-link"
                    type="link"
                    to="/"
                    exact
                  >
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button
                    as="{NavLink}"
                    className="nav-link"
                    type="link"
                    to="/"
                    exact
                  >
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
