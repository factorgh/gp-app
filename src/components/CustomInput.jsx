/* eslint-disable react/prop-types */
const CustomInput = ({ name, placeholder, type, ...otherInput }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} {...otherInput} />
  );
};

export default CustomInput;
