import React from 'react';
import {Link} from 'react-router-dom';
function Login(){
  return(
    <div className="login-wrap">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" defaultChecked />
              </div>
              <div className="group">
                <Link to="/log">
                  <button>Sign in</button>
                </Link>
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Conform Password</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Email Address</label>
                <input id="pass" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Phone Number</label>
                <input id="pass" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Country</label>
                <input id="pass" type="text" className="input" />
              </div>
              <div className="group">
                <input type="submit" className="button" defaultValue="Sign Up" />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Login;