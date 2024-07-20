/* eslint-disable react/prop-types */
const CustomOtpInput = ({ name, placeholder, type, ...otherInput }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} {...otherInput} />
  );
};

export default CustomOtpInput;
