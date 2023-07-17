import { Link } from "react-router-dom";

//Assets
import vid from "../assets/Rectangle 3.png";
import image35 from "../assets/Rectangle-35.png";
import image36 from "../assets/Rectangle-36.png";

//style
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <section className="home-section-one">
        <div>
          <h2>
            BRIDGING THE GAP <br /> FOR FUTURE GENZ IN <br /> THE HEALTH REALM.
          </h2>

          <Link to="#">BOOK A DEMO</Link>
        </div>

        <div>
          <img src={vid} alt="video" />
        </div>
      </section>

      <section className="home-section-two">
        <div className="partners">
          <h3>Trusted By</h3>
          <div>
            <span>GOOGLE</span>
            <span>AMAZON</span>
            <span>ECOWAS</span>
            <span>ECOMOG</span>
            <span>WHO</span>
          </div>
        </div>
      </section>

      <section className="home-section-three">
        <div className="courses">
          <div className="courses-text">
            <h3>
              Dive into our <br /> available courses.
            </h3>

            <p>
              We provide the most essential courses to <br />
              make you stand out in the Health Realm.
            </p>
          </div>

          <div className="courses-img">
            <div className="courses-circle"></div>
            <img src={image35} alt="course photo" className="image35" />
            <img src={image36} alt="course photo" className="image36" />
          </div>
        </div>
      </section>

      <section className="home-section-four">
        <h3>
          Make the best choice by choosing <br />
          from the available LMS plans.
        </h3>

        <div className="home-plans">
          <div className="home-silver-plan">
            <h4>SILVER</h4>
            <ul>
              <li>1 Workspace</li>
              <li>5 Courses</li>
              <li>10 Projects</li>
              <li>3 Blogs</li>
            </ul>
          </div>

          <div className="home-diamond-plan">
            <h4>DIAMOND</h4>
            <ul>
              <li>5 Workspaces</li>
              <li>15 Courses</li>
              <li>20 Projects</li>
              <li>10 Blogs</li>
            </ul>
          </div>

          <div className="home-gold-plan">
            <h4>GOLD</h4>
            <ul>
              <li>3 Workspaces</li>
              <li>10 Courses</li>
              <li>15 Projects</li>
              <li>5 Blogs</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
