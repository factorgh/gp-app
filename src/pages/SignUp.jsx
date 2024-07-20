import { Link } from "react-router-dom";
import signImage1 from "../assets/images/doc1.png";
import signImage2 from "../assets/images/doc2.png";
import signImage3 from "../assets/images/doc3.png";
import CustomInput from "../components/CustomInput";
import { FaHospital, FaPersonDress } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";

const SignUp = () => {
  return (
    <div className="w-screen h-screen flex  ">
      {/* Banner section */}
      <div className="bg-[#1B9AAA]  flex-1 flex  items-center justify-center rounded-r-xl">
        <img
          style={{
            width: 300,
            height: 400,
            objectFit: "cover",
            position: "absolute",
            top: 157,
            zIndex: 1,
          }}
          src={signImage1}
          alt="SignUp image"
        />
        <img
          style={{
            width: 300,
            height: 300,
            objectFit: "cover",
            position: "absolute",
            left: 350,
          }}
          src={signImage2}
          alt="SignUp image"
        />
        <img
          style={{
            width: 300,
            height: 300,
            objectFit: "cover",
            position: "absolute",
            left: 20,
          }}
          src={signImage3}
          alt="SignUp image"
        />
      </div>
      {/* SignUp form */}
      <div className="flex-1 h-full w-full flex flex-col items-center  justify-center">
        <div className="mb-10 flex flex-col items-center">
          <h3 className="font-semibold text-4xl text-slate-700 mb-3">
            Welcome to VI Corp clinic
          </h3>
          <h3 className="text-red-300 font-mono text-[10px]">
            Signup and start the adventure
          </h3>
        </div>

        {/* Form section */}
        <form className="flex flex-col  ">
          <div className="flex items-center  gap-5">
            {/* First section */}
            <div className="flex flex-col">
              <label className="flex gap-2 mb-1 items-center" htmlFor="email">
                <span className="text-sm font-semibold text-slate-700">
                  FirstName
                </span>
              </label>
              <CustomInput className="border border-slate-400 p-2 rounded-xl w-[200px] " />
            </div>

            <div className="flex flex-col">
              <label className="flex gap-2 mb-1 items-center" htmlFor="email">
                <span className="text-sm font-semibold text-slate-700">
                  LastName
                </span>
              </label>
              <CustomInput
                type="text"
                className="border border-slate-400 p-2 rounded-xl w-[200px] "
              />
            </div>
          </div>
          <label className="flex gap-2 mb-1 items-center mt-3" htmlFor="email">
            <span className="text-sm font-semibold text-slate-700">Email</span>
          </label>
          <CustomInput
            type="text"
            className="border border-slate-400 p-2 rounded-xl w-[420px]  "
          />
          {/* password section */}
          <div className="flex items-center  gap-5 mt-3">
            {/* First section */}
            <div className="flex flex-col">
              <label className="flex gap-2 mb-1 items-center" htmlFor="email">
                <span className="text-sm font-semibold text-slate-700">
                  Password
                </span>
              </label>
              <CustomInput
                className="border border-slate-400 p-2 rounded-xl w-[200px] "
                type="password"
              />
            </div>

            <div className="flex flex-col">
              <label className="flex gap-2 mb-1 items-center" htmlFor="email">
                <span className="text-sm font-semibold text-slate-700">
                  Confirm Password
                </span>
              </label>
              <CustomInput
                type="password"
                className="border border-slate-400 p-2 rounded-xl w-[200px] "
              />
            </div>
          </div>
          {/* End of password section */}
          <label className="flex gap-2 mb-1 items-center mt-3" htmlFor="email">
            <span className="text-sm font-semibold text-slate-700">
              Date of Birth
            </span>
          </label>
          <div className="flex gap-3 items-center">
            <select className="w-32 border border-slate-300 p-2 rounded-xl">
              <option>Apr</option>
            </select>

            <select className="w-32 border border-slate-300 p-2 rounded-xl">
              <option>8</option>
            </select>

            <select className="w-32 border border-slate-300 p-2 rounded-xl">
              <option>2024</option>
            </select>
          </div>
          {/* Gender section */}
          <label className="flex gap-2 mb-1 items-center mt-3" htmlFor="email">
            <span className="text-sm font-semibold text-slate-700">Gender</span>
          </label>
          <div className="flex items-center gap-5">
            <div className="border border-slate-300 rounded-full w-28 h-10 flex  items-center p-1 gap-2 ">
              <FaPersonDress />
              <h3>female</h3>
              <input type="radio" name="gender" />
            </div>
            <div className="border border-slate-300 rounded-full w-28 h-10 flex  items-center p-1 gap-2 ">
              <FaPersonDress />
              <h3>male</h3>
              <input type="radio" name="gender" />
            </div>
          </div>
          {/* End of  gender selection  */}
          {/* Specilization selection  */}
          <div className="flex gap-5">
            <div>
              <label
                className="flex gap-2 mb-1 items-center mt-3"
                htmlFor="email"
              >
                <span className="text-sm font-semibold text-slate-700">
                  Specialization
                </span>
              </label>
              <select className="w-52 border border-slate-300 p-3 rounded-full ">
                <option className="flex gap-2">
                  <FaUserDoctor />
                  <h5> Cardiologist</h5>
                </option>
              </select>
            </div>
            {/* End of specilization */}
            {/* hospital section */}
            <div>
              <label
                className="flex gap-2 mb-1 items-center mt-3"
                htmlFor="email"
              >
                <span className="text-sm font-semibold text-slate-700">
                  Hospital
                </span>
              </label>
              <select className="w-60 border border-slate-300 p-3 rounded-full ">
                <option className="flex gap-2">
                  <FaHospital />
                  <h3>Korle Bu</h3>
                </option>
              </select>
            </div>
          </div>
        </form>
        {/* Forgot password section */}
        {/* Info section  */}
        <h3 className="text-[10px] text-gray-300 mt-5">
          By clicking Sign Up, you agree to our Terms and Privacy Policy.
        </h3>
        <h3 className="text-[10px] mb-3 text-gray-300">
          {" "}
          You may receive SMS Notifications from us and can opt out any time.
        </h3>
        {/* login button */}
        <Link to={"/dashboard"}>
          <button className="bg-[#06D6A0] p-2 rounded-md  text-slate-50 w-48 text-semibold  mb-5">
            SignUp
          </button>
        </Link>
        <p>
          Already have an account
          <span className="text-[#1B9AAA] text-md text-semibold cursor-pointer ml-2">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
