//assets
import love from "../assets/love.png";

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact">
      <div className="section-eight-contact">
        <h3>Contact Us</h3>

        <div className="section-eight-contact-info">
          <div className="eight-contact-text">
            <h4>Let us help with our best services.</h4>
            <p>
              Drop us a line, we’ll be grateful to be of help throughout your
              journey on <span>Saggio</span>.
            </p>

            <div className="eight-contact-img">
              <img src={love} alt="" />
            </div>
          </div>

          <form>
            <input type="text" placeholder="Enter your name" />

            <input type="email" placeholder="Enter your email" />

            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Type your message"
            ></textarea>

            <button>SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
