import React from "react";
import NavBar from "../../components/navigation";

import "./sign-up.scss";

function SignUp() {
  return (
    <div className="signup-page">
      <NavBar />
      <h2>Create your account now</h2>
      <form>
        <label>
          Full name
          <input type="text" placeholder="your full name" />
        </label>
        <label>
          Email
          <input type="text" placeholder="your email" />
        </label>
        <label>
          Password
          <input type="password" placeholder="password" />
        </label>
        <button>BEGIN YOUR ADVENTURE</button>
        <p>
          Already have an account? <span> Sign in.</span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
