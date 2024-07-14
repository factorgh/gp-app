/* eslint-disable react/prop-types */
const CustomInput = ({ name, placeholder, type, ...otherInput }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      {...otherInput}
      className="border border-slate-400 p-2 rounded-xl w-[400px] "
    />
  );
};

export default CustomInput;
