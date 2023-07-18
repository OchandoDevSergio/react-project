import "./MyInput.css";

export const MyInput = ({ name, placeholder, type }) => {
  return <input 
            name={name} 
            type={type} 
            placeholder={placeholder} 
        />;
};
