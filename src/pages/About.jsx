//assets
import image1 from "../assets/Rectangle1449.png";
import image2 from "../assets/Rectangle1451.png";
import image3 from "../assets/Rectangle1457.png";
import image4 from "../assets/Rectangle1454.png";
import image5 from "../assets/Rectangle1458.png";

//style
import "./About.css";

//components
import ContactForm from "../components/ContactForm";

const About = () => {
  return (
    <main className="about">
      <div className="about-hero">
        <h2>ABOUT US</h2>
      </div>

      <section className="about-section-one">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatu Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id es Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas
          sit. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id es Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, to Nemo enim ipsam voluptatem quia
          voluptas sit.
        </p>

        <img src={image1} alt="about photo" />
      </section>

      <section className="about-section-two">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatu Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id es Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas
          sit. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id es Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, to Nemo enim ipsam voluptatem quia
          voluptas sit. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id es Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, to Nemo enim ipsam
          voluptatem quia voluptas sit. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatu
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Sed ut perspiciatis unde omnis iste
          natus error sit voluptatem accusantium doloremque laudantium, to Nemo
          enim ipsam voluptatem quia voluptas sit.
        </p>
      </section>

      {/* SECTION THREE */}
      <section className="about-section-three">
        <img src={image2} alt="about photo" />

        <div>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id es Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, to Nemo enim ipsam
            voluptatem quia voluptas sit.
          </p>
          <p className="p-middle">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id es Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, to Nemo enim ipsam
            voluptatem quia voluptas sit.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id es Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, to Nemo enim ipsam
            voluptatem quia voluptas sit.
          </p>
        </div>
      </section>

      {/* SECTION FOUR */}
      <section className="about-section-four">
        <h2>Meet Our Team</h2>
        <div className="section-four-container">
          <div className="section-four-team">
            <div>
              <img src={image3} alt="team photo" />

              <div className="section-four-text">
                <span>Chief Resident</span>
                <h3>William Betty</h3>
                <p>
                  One of our great Staff, having been with the organisation for
                  years, he has been delivering at all cost and keeping the
                  image of our organisation intact. He is the Chief Executive
                  Director and his leadership skills are great enough to keep
                  leading the organisation forward.
                </p>
              </div>
            </div>

            <div>
              <img src={image4} alt="team photo" />

              <div className="section-four-text">
                <span>Chief Executive Officer</span>
                <h3>Collins Walters</h3>
                <p>
                  One of our great Staff, having been with the organisation for
                  years, he has been delivering at all cost and keeping the
                  image of our organisation intact. He is the Chief Executive
                  Director and his leadership skills are great enough to keep
                  leading the organisation forward.
                </p>
              </div>
            </div>

            <div>
              <img src={image5} alt="team photo" />

              <div className="section-four-text">
                <span>Instructor</span>
                <h3>David Amaka </h3>
                <p>
                  One of our great Staff, having been with the organisation for
                  years, he has been delivering at all cost and keeping the
                  image of our organisation intact. He is the Chief Executive
                  Director and his leadership skills are great enough to keep
                  leading the organisation forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FIVE */}
      <section className="about-section-five"></section>

      {/* SECTION SIX */}
      <ContactForm />
    </main>
  );
};

export default About;
