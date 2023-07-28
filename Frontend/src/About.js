import React from "react";
import { Link } from "react-router-dom";
import './About.css';
function About(){
    return(
      <div className="body">
      <div className="home">
      <Link to="/home">HOME</Link>
      <div className="aboutlink">
        <a href="#top">*B</a>
        <a href="#top">*O</a>
        <a href="#top">*O</a>
        <a href="#top">*K</a>
        <a href="#top">*S</a>
        <a href="#top">*T</a>
        <a href="#top">*O</a>
        <a href="#top">*R</a>
        <a href="#top">*E</a>
      </div>
      <div className="wrapwrap">
        <div className="about">
          <h1>About Us</h1>
          <p>
          A <b>bookstore</b> is a store that sells books, and where people can buy them. A used bookstore or second-hand bookshop sells and often buys used <b>books</b>.
            <br />
            Besides being a great space to browse for your next book, you can also find comfortable workstations, cosy reading spaces, a mini maze for <b>children and coffee</b> if you're feeling like it.
          </p>
        </div>
      </div>
     <div id="Availability" className="aboutinfo">
        <div>
        </div>
      </div>
        </div>
        </div>
    );
}
export default About;