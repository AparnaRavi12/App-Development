import React from "react";
import { Link } from "react-router-dom";
import './Contact.css';
function Contact(){
    return(
      <div className="con">
      <div>
      <Link to="/home">HOME</Link>
        <div className="container">
        <div className="card">
          <div className="left">
            <img src="https://st.depositphotos.com/1741875/1237/i/600/depositphotos_12376816-stock-photo-stack-of-old-books.jpg" />
          </div>
          <div className="right">
            <h2>Contact Us</h2>
            <div className="contact">
              <div className="form-container">
                <form className="form">
                  <div className="username">
                    <input type="text" placeholder="Enter your Name" />
                  </div>
                  <div className="useremail">
                    <input type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="usermessage">
                    <textarea placeholder="Enter your message" required defaultValue={""} />
                  </div>
                  <div className="usersubmit">
                    <button>Submit</button>
                  </div>
                </form>
              </div>
              <div className="address">
                <div className="email">
                  <h4>Contact</h4>
                  <p>00145264785905</p>
                </div>
                <div className="location">
                  <h4>Based in</h4>
                  <p>India</p>
                </div>
                <div className="social">
                  <span><a href="#"><i className="fab fa-facebook" /></a></span>
                  <span><a href="#" target="_blank"><i className="fab fa-instagram" /></a></span>
                  <span><a href="#" target="_blank"><i className="fab fa-twitter" /></a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
}
export default Contact;