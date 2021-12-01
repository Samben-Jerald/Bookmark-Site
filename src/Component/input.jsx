import React from "react";
import "../style/input.css";

const Input = () => {
  const emailRef = React.useRef();
  const [errorState, setErrorState] = React.useState(false);
  const inputBlurHandler = () => {
    const { value } = emailRef.current;
    console.log(value);
    if (value.includes("@") && value.includes(".") && value !== "") {
     setErrorState(false)
    } else {
      setErrorState(true);
    }
  };
  const setOulineInput =  errorState && "add-outline"
  const inputBorder = errorState && "remove-border"
  return (
    <div className={`input-container ${setOulineInput}`}>
      <input
        type="email"
        className={`email-input ${inputBorder}`}
        onBlur={inputBlurHandler}
        ref={emailRef}
      />
      {errorState && (
        <span className="input-error">whoops! make Sure its an email</span>
      )}
    </div>
  );
};

export default Input;
