import { Link } from "react-router-dom";
import "./LoginButton.css";

const LoginButton = () => {
  return (
    <div className="login">
      <Link to="login-page">Login</Link>
    </div>
  );
};

export default LoginButton;
