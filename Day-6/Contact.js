import React from "react";
function Contact(){
    return(
        <div class="container">
        <div class="card">
          <div class="left">
            <img src="https://img.freepik.com/premium-vector/books-foliage-flat-illustration_145790-685.jpg">
          </img>
          </div>
          <div class="right">
            <h2>Contact Us</h2>
            <div class="contact">
              <div class="form-container">
                <form class="form">
                  <div class="username">
                    <input type="text" placeholder="Enter your Name"></input>
                  </div>
                  <div class="useremail">
                    <input type="email" placeholder="Enter your email" required></input>
                  </div>
                  <div class="usermessage">
                    <textarea placeholder="Enter your message" required></textarea>
                  </div>
                  <div class="usersubmit">
                    <input type="submit" value="Contact Us"></input>
                  </div>
                </form>
              </div>
              <div class="address">
                <div class="email">
                  <h4>Contact</h4>
                  <p>hi@example.com</p>
                </div>
                <div class="location">
                  <h4>Phone no</h4>
                  <p>00004765437</p>
                </div>
                <div class="social">
                  <span><a href="#"><i class="fab fa-facebook"></i></a></span>
                  <span><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></span>
                  <span><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Contact;