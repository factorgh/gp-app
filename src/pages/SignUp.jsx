import { Link } from "react-router-dom";
import signImage1 from "../assets/images/doc1.png";
import signImage2 from "../assets/images/doc2.png";
import signImage3 from "../assets/images/doc3.png";
import CustomInput from "../components/CustomInput";

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
          <div className="flex items-center justify-center gap-5">
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
          <div className="flex items-center justify-center gap-5 mt-3">
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
          {/* End of selects   for date */}
        </form>
        {/* Forgot password section */}

        {/* login button */}
        <button className="bg-[#FFC43D] p-2 rounded-md  text-slate-50 w-32 mt-10 mb-5">
          SignUp
        </button>
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
