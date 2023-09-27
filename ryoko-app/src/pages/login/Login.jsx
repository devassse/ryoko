import React from "react";
import "./login.css";
import ryokoLogo from "../../assets/imgs/ryoko-192.png";

export default function Login() {
  return (
    <section className="base-login-register">
      <div className="login-logo">
        <img className="logo" src={ryokoLogo} alt="Ryoko Logo" />
        <span className="app-name">Ryokō</span>
      </div>
      <article className="login">
        <div className="login-layer-1">
          <div className="login-layer-2">
            <div className="login-fields">
              <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" className="username" />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" className="password" />
              </div>
              <div className="form-control">
                <input type="radio" placeholder="Remenber-me" />
              </div>
              <div className="form-control">
                <button className="login-btn">Login</button>
              </div>
            <span>Don't have an account? <a href="#/">Register</a></span>
            </div>
          </div>
        </div>
      </article>
      <article className="register"></article>
    </section>
  );
}
