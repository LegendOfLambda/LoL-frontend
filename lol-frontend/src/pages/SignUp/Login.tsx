import React, { useState } from "react";
import NavBar from "../../components/navigation";

import "./sign-up.scss";

import { loginUser } from "../../redux/actions/register_actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser(user);
    if (localStorage.getItem("token")) {
      history.push("/intro/1");
    }
  };

  return (
    <div className="signup-page">
      <NavBar />
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit} noValidate={true}>
        <label>
          Username
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
            type="text"
            placeholder="your username"
          />
        </label>
        <label>
          Email
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
            placeholder="email"
          />
        </label>
        <label>
          Password
          <input
            name="password1"
            value={user.password}
            onChange={handleChange}
            type="password"
            placeholder="password"
          />
        </label>

        <button type="submit">CONTINUE YOUR ADVENTURE</button>
        <p>
          New to Legend of Lambda? <a href="/register"> Register</a>
        </p>
      </form>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { loginUser })(Login);
