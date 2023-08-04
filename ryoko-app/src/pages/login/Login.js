import React from "react";
import "./login.css";
import ryokoLogo from "../../assets/imgs/ryoko-192.png";

export default function Login() {
  return (
    <div className="base-login">
      <img className="main-logo" src={ryokoLogo} alt="Ryoko Logo" />
      <section className="base-app">
        <section className="base-level-1">
          <section className="base-level-2">
            <section className="main-level-login">
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
              <button>Login</button>
              <span className="account-verification">
                Do not have Account? <a href="/register">Register</a>
              </span>
            </section>
            <section className="main-level-register">
              <div className="first-last-names">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Retype Password" />
              <button>Register</button>
              <span className="account-verification">
                Have Account? <a href="/login">Login</a>
              </span>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}
