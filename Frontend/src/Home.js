import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
function Home(){
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  return(
    <div className="Home">
    <div>
        <title />  
        <div className="header">
        <li className="but">
     <button className="openbtn" onClick={openNav}>&#9776;</button>
     </li>
     <img src="https://www.shutterstock.com/image-vector/hand-keep-book-read-source-600w-1127076767.jpg"></img>
          <div className="logo"><h1>BOOK<span>STORE</span></h1></div> 
          <div className="navbar">
            <Link to="/about">ABOUT</Link>
            <Link to="/books">BOOKS</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/search">SEARCH</Link>
          </div>
        </div> 
        <div id="mySidepanel" className="sidepanel">
<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
<Link to="/">Logout</Link>
<Link to="/feedback">Feedback</Link>
</div>
<div>
<img src="https://m.media-amazon.com/images/I/714sdCHaMvL._AC_UF1000,1000_QL80_.jpg" width="100%" height="100%"></img>
</div>
<div className="news-container">
        <div className="news-heading">BOOK</div>
        <div className="news">
          <a href="#" className="news-single active">
          The more that you read, the more things you will know. The more that you learn, the more places you'll go.
          </a>
          <a href="#" className="news-single">
          Books are a uniquely portable magic.
          </a>
          <a href="#" className="news-single">
          I kept always two books in my pocket, one to read, one to write in.
          </a>
          <a href="#" className="news-single">
          I am not afraid of storms, for I am learning how to sail my ship.
          </a>
          <a href="#" className="news-single">
          Everything was beautiful, and nothing hurt.
          </a>
        </div>
      </div>
      </div>
      </div>
  ); 
}
export default Home;