import React from 'react'

function ForgotPassword () {
  return (
    <div className="register-form-container">
    <form className="register-form">
      <div className="register-form-content">
        <h3 className="register-form-title">Forgot Password?</h3>
      
        {/* <p className="forgot-password text-center mt-2">
            Enter you Email to reset password.
          </p> */}
        <div className="form-group mt-3">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                />
        </div>
        <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Reset Password.
                </button>
               

              {/* <p className="text-center mt-2">
                Have an Account? <a href="/login">Login</a>
              </p>
              <p className="forgot-password text-center mt-2">
            Don't have an Account <a href="/register">Register?</a>
          </p> */}
              </div>
        </div>
        </form>
        </div>
  )
}

export default ForgotPassword
