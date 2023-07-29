import { Link } from "react-router-dom";

//components
import ContactForm from "../components/ContactForm";

//Assets
import video1 from "../assets/Rectangle 3.png";
import video2 from "../assets/Rectangle-29.png";
import image35 from "../assets/Rectangle-35.png";
import image36 from "../assets/Rectangle-36.png";
import image31 from "../assets/Rectangle-31.png";
import image32 from "../assets/Rectangle-32.png";
import image33 from "../assets/Rectangle-33.png";
import image34 from "../assets/Rectangle-34.png";
import image44 from "../assets/Rectangle-44.png";

//style
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <section className="home-section-one">
        <div className="home-demo">
          <h2>BRIDGING THE GAP FOR FUTURE GENZ IN THE HEALTH REALM.</h2>

          <Link to="#">BOOK A DEMO</Link>
        </div>

        <div>
          <img src={video1} alt="video" />
        </div>
      </section>

      <section className="home-section-two">
        <div className="partners">
          <h3>Trusted By</h3>
          <div>
            <p>GOOGLE</p>
            <p>AMAZON</p>
            <p>ECOWAS</p>
            <p>ECOMOG</p>
            <p>WHO</p>
          </div>
        </div>
      </section>

      {/* SECTION THREE */}
      <section className="home-section-three">
        <div className="courses">
          <div className="courses-text">
            <h3>Dive into our available courses.</h3>

            <p>
              We provide the most essential courses to make you stand out in the
              Health Realm.
            </p>
          </div>

          <div className="courses-img">
            <div className="courses-circle"></div>
            <img src={image35} alt="course photo" className="image35" />
            <img src={image36} alt="course photo" className="image36" />
          </div>
        </div>
      </section>

      {/* SECTION FOUR */}
      <section className="home-section-four">
        <h3>Make the best choice by choosing from the available LMS plans.</h3>

        <div className="home-plans">
          <div className="home-silver-plan">
            <Link to="#">
              <h4>SILVER</h4>
            </Link>
            <ul>
              <li>1 Workspace</li>
              <li>5 Courses</li>
              <li>10 Projects</li>
              <li>3 Blogs</li>
            </ul>
          </div>

          <div className="home-diamond-plan">
            <Link to="#">
              <h4>DIAMOND</h4>
            </Link>
            <ul>
              <li>5 Workspaces</li>
              <li>15 Courses</li>
              <li>20 Projects</li>
              <li>10 Blogs</li>
            </ul>
          </div>

          <div className="home-gold-plan">
            <Link to="#">
              <h4>GOLD</h4>
            </Link>
            <ul>
              <li>3 Workspaces</li>
              <li>10 Courses</li>
              <li>15 Projects</li>
              <li>5 Blogs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION FIVE */}
      <section className="home-section-five">
        <h3>
          On our Timeline, you get the best insights about <span>Saggio</span>.
        </h3>

        <div className="home-timelines">
          <div className="home-timeline-one">
            <div className="timeline-one-upper">
              <img src={image31} alt="timeline photo" />
              <div>
                <h5>Reinforcing the GENZ</h5>
                <p>
                  Bringing onboard determined young talents had been the
                  interest of the organisation, with various experts to teach
                  them.
                </p>
              </div>
            </div>

            <div className="timeline-one-lower">
              <img src={image34} alt="timeline photo" />
              <div>
                <h5>Care for all</h5>
                <p>
                  At Saggio, we believe that everyone requires that utmost
                  care,then we go in extent might to treat every clients equally
                  withour best.
                </p>
              </div>
            </div>
          </div>

          <div className="home-timeline-two">
            <div className="timeline-two-upper">
              <img src={image32} alt="timeline photo" />
              <div>
                <h5>Care for all</h5>
                <p>
                  At Saggio, we believe that everyone requires that utmost
                  care,then we go in extent might to treat every clients equally
                  withour best.
                </p>
              </div>
            </div>

            <div className="timeline-two-lower">
              <img src={image33} alt="timeline photo" />
              <div>
                <h5>Top Fifteen Trends in Industry</h5>
                <p>
                  We know how odd it is to be in the dark, so we pile up the
                  necessary information for your best understanding about the
                  industry you are diving into.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SIX */}
      <section className="home-section-six">
        <div className="section-six-testimonial">
          <h3>Look at what our clients got for you.</h3>

          <p>
            We meet with our clients and capture a direct testimony that speaks
            well about what we do.
          </p>

          <img src={video2} alt="testimonial video" />
        </div>
      </section>

      {/* SECTION SEVEN */}
      <section className="home-section-seven">
        <h3>Know more about our Product</h3>

        <div className="section-seven-product">
          <div>
            <p>Struggling to navigate the product?</p>
            <h4>
              Book a One on One session, we are ready to serve you better!
            </h4>

            <Link to="#">BOOK A DEMO</Link>
          </div>

          <img src={image44} alt="product photo" />
        </div>
      </section>

      {/* SECTION EIGHT- CONTACT US */}
      <ContactForm />
    </main>
  );
};

export default Home;
