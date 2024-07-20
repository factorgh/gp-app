import loginImage from "../assets/images/login.png";
import CustomInput from "../components/CustomInput";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen flex  ">
      {/* Banner section */}
      <div className="bg-[#1B9AAA] flex-1 flex  items-center justify-center rounded-r-xl">
        <img
          style={{ width: 400, height: 400, objectFit: "cover" }}
          src={loginImage}
          alt="Login image"
        />
      </div>
      {/* Login form */}
      <div className="flex-1 h-full w-full flex flex-col items-center  justify-center">
        <div className="mb-10 flex flex-col items-center">
          <h3 className="font-semibold text-4xl text-slate-700 mb-3">
            Welcome to VI Corp clinic
          </h3>
          <h3 className="text-red-300 font-mono text-[10px]">
            Please sigin into your account and start your adventure
          </h3>
        </div>

        {/* Form section */}
        <form className="flex flex-col  ">
          <label className="flex gap-2 mb-1 items-center" htmlFor="email">
            <MdEmail />{" "}
            <span className="text-sm font-semibold text-slate-700">Email</span>
          </label>
          <CustomInput
            className="border border-slate-400 p-2 rounded-xl w-[400px] "
            placeholder="Please enter your email"
          />
          <label className="flex gap-2 mb-1 items-center mt-5" htmlFor="email">
            <FaLock />{" "}
            <span className="text-sm font-semibold text-slate-700">
              Password
            </span>
          </label>
          <CustomInput
            type="password"
            placeholder="Please enter your password"
            className="border border-slate-400 p-2 rounded-xl w-[400px] "
          />
        </form>
        {/* Forgot password section */}
        <div className="flex gap-20 mt-10">
          <div className="flex gap-3">
            <input type="checkbox" />
            <p className="text-slate-500 font-mono">Remember me</p>
          </div>
          {/* Forgot password button */}
          <Link to={"/reset-password"}>Forgot password</Link>
        </div>

        {/* login button */}
        <Link to={"/otp"}>
          <button className="bg-[#06D6A0] mt-10 p-2 rounded-md  text-slate-50 w-32 text-semibold  mb-5">
            Login
          </button>
        </Link>
        <p>
          New on our platform?
          <Link to={"/signup"}>
            <span className="text-[#1B9AAA] text-md text-semibold cursor-pointer ml-2">
              Create an account
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
