import React from "react";

import "./custom-button.styles.scss";

function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-signin" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
