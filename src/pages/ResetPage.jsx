import { Link } from "react-router-dom";
import resetImage from "../assets/images/reset-image.png";
import CustomInput from "../components/CustomInput";

const ResetPage = () => {
  return (
    <div className="w-screen h-screen flex  ">
      {/* Banner section */}
      <div className="bg-[#1B9AAA] flex-1 flex  items-center justify-center rounded-r-xl">
        <img
          style={{ width: 500, height: 500, objectFit: "cover" }}
          src={resetImage}
          alt="Reset image"
        />
      </div>
      {/* ResetPage form */}
      <div className="flex-1 h-full w-full flex flex-col items-center  justify-center">
        <div className="mb-10 flex flex-col items-center">
          <h3 className="font-semibold text-4xl text-slate-700 mb-3">
            Change Password
          </h3>
        </div>

        {/* Form section */}
        <form className="flex flex-col  ">
          <label className="flex gap-2 mb-1 items-center" htmlFor="email">
            <span className="text-sm font-semibold text-slate-700">
              New Password
            </span>
          </label>
          <CustomInput className="border border-slate-400 p-2 rounded-xl w-[400px] " />
          <label className="flex gap-2 mb-1 items-center mt-5" htmlFor="email">
            <span className="text-sm font-semibold text-slate-700">
              Confirm Password
            </span>
          </label>
          <CustomInput
            type="password"
            className="border border-slate-400 p-2 rounded-xl w-[400px] "
          />
        </form>

        {/* reset button */}
        <Link to={"/login"}>
          <button className="bg-[#06D6A0] mt-10 p-2 rounded-md  text-slate-50 w-32 text-semibold  mb-5">
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResetPage;
