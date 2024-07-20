import { Link } from "react-router-dom";
import otpImage from "../assets/images/otp.png";
import CustomInput from "../components/CustomInput";

const OtpPage = () => {
  return (
    <div className="w-screen h-screen flex  ">
      {/* Banner section */}
      <div className="bg-[#1B9AAA] flex-1 flex  items-center justify-center rounded-r-xl">
        <img
          style={{ width: 500, height: 500, objectFit: "contain" }}
          src={otpImage}
          alt="Reset image"
        />
      </div>
      {/* ResetPage form */}
      <div className="flex-1 h-full w-full flex flex-col items-center  justify-center">
        <div className="mb-10 flex flex-col  w-full items-center">
          <h3 className="font-semibold text-2xl text-slate-700 ">
            Enter the confirmation code from
          </h3>
          <h3 className="font-semibold text-2xl text-slate-700 mb-3">
            the message you received.
          </h3>
        </div>

        <div>
          <h3 className="text-[12px] text-gray-400 ">
            Let us know this mobile number belongs to you
          </h3>
          <h3 className="text-[12px] mb-3 text-gray-400">
            {" "}
            Enter the code in the SMS sent to +9178123456.
          </h3>
        </div>
        {/* Form section */}
        <form className="flex gap-3 ">
          <CustomInput
            name="otp1"
            type="text"
            className="border border-slate-400 p-2  w-[60px] h-[60px] pl-3  "
          />
          <CustomInput
            name="second"
            type="text"
            className="border border-slate-400 p-2  w-[60px] h-[60px] pl-3 "
          />
          <CustomInput
            name="otp3"
            type="text"
            className="border border-slate-400 p-2  w-[60px] h-[60px] pl-3 "
          />
          <CustomInput
            type="text"
            name="otp4"
            className="border border-slate-400 p-2  w-[60px] h-[60px] pl-3 "
          />
        </form>

        {/* reset button */}
        <Link to={"/dashboard"}>
          <button className="bg-[#06D6A0] mt-10 p-2 rounded-md  text-slate-50 w-32 text-semibold  mb-5">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OtpPage;
