import { Link } from "react-router-dom";
import "./SignUpButton.css";

const SignUpButton = () => {
  return (
    <div className="sign-up-btn">
      <Link to="signup-page">Sign up</Link>
    </div>
  );
};

export default SignUpButton;
