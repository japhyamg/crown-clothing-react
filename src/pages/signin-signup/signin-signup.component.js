import React from "react";

import "./signin-signup.styles.scss";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

function SignInSignUp() {
  return (
    <div className="signin-signup">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInSignUp;
