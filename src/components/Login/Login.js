import React from "react"
import "./Login.css"

function Login () {


return (
    <div className="login-form-container">
      <form className="login-form">
        <div className="login-form-content">
          <h3 className="login-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-center mt-2">
            Forgot <a href="/forgotpassword">Password?</a>
          </p>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login with Google
            </button>
          </div>

          <p className="forgot-password text-center mt-2">
            Dont have an Account <a href="/register">Register?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login;