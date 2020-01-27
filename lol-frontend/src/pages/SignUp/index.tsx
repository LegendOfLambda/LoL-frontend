import React, { useState } from "react";
import NavBar from "../../components/navigation";

import "./sign-up.scss";

import { registerUser } from "../../redux/actions/register_actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerUser(user);

    history.push('/intro/1')
  };

  return (
    <div className="signup-page">
      <NavBar />
      <h2>Create your account now</h2>
      <form onSubmit={handleSubmit} noValidate={true}>
        <label>
          Full name
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
            type="text"
            placeholder="your full name"
          />
        </label>
        <label>
          Email
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            type="text"
            placeholder="your email"
          />
        </label>
        <label>
          Password
          <input
            name="password1"
            value={user.password1}
            onChange={handleChange}
            type="password"
            placeholder="password"
          />
        </label>
        <label>
          Confirm password
          <input
            name="password2"
            value={user.password2}
            onChange={handleChange}
            type="password"
            placeholder="confirm password"
          />
        </label>
        <button type="submit">BEGIN YOUR ADVENTURE</button>
        <p>
          Already have an account? <span> Sign in.</span>
        </p>
      </form>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { registerUser })(SignUp);
