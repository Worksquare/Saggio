import "./LoginPage.css";
import docImg from "../assets/Rectangle 38.png"
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <>
    <div className="text-center text-2xl font-bold">
        <h1>We miss you, Log into our account</h1>
      </div>
    <div className=" m-auto flex-col-reverse text-center md:flex-row flex justify-between items-center container">
      <div className="md:w-1/2 flex flex-col items-center ">
        <img src={docImg} className="w-64" alt="" />
      </div>
      <div className="w-full md:w-1/2 flex-col space-y-6  flex p-12">
        <form className=" space-y-12">
          <div><input type="text" placeholder="Email" className="border w-full p-2 rounded outline-none" /></div>
          <div><input type="text" placeholder="Password" className="border w-full rounded p-2 outline-none" /></div>
          <button className="border w-1/2 md:w-full p-2 rounded bg-[#14EB9C] text-white font-bold">Login</button>
        </form>
        <h3>OR</h3>
        <div className="w-full space-x-12">
          <button className="border py-1 px-6 shadow-md rounded">Google</button>
          <button className="border py-1 px-6 shadow-md rounded">LinkedIn</button>
        </div>
        <h4>
          Do not have an Account?<Link to={"/signup-page"}><span className="px-3 font-semibold">Sign Up</span></Link>
        </h4>
      </div>
    </div>
    </>
  );
};

export default LoginPage;

