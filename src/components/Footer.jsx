import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-text">
          <div className="footer-logo">
            <Link to="/">SAGGIO</Link>
          </div>

          <p>
            Bridging the gap for the <br /> future GENZ in the Heath Realm.
          </p>

          <Link to="#" className="footer-demo">
            BOOK A DEMO
          </Link>
        </div>

        <div className="footer-links">
          <div className="footer-company">
            <h3>Company</h3>
            <div>
              <Link to="about">About</Link>
              <Link to="blog">Blog Page</Link>
              <Link to="library">Library</Link>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact us</h3>

            <div>
              <p>
                142, Florida Dr, <br /> California, Florida, <br /> Unites State
                of America
              </p>

              <p>(+1) 623 673 1098 </p>
              <p>(+1) 527 873 0098 </p>
              <span>contact@saggio.com</span>
            </div>
          </div>

          <div className="footer-socials">
            <h3>Socials</h3>

            <div>
              <Link to="#">Facebook</Link>
              <Link to="#">Instagram</Link>
              <Link to="#">Linkedin</Link>
              <Link to="#">Twitter</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-foot">
        <ul>
          <li>Terms and condition</li>
          <li>Privacy</li>
          <li>Support</li>
        </ul>

        <select name="" id="">
          <option value="english">English</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
