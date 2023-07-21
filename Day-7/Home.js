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
          </div>
        </div> 
        <div id="mySidepanel" className="sidepanel">
<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
<Link to="/">Logout</Link>
<Link to="/setting">Setting</Link>
</div>
<div>
<img src="https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N0b3JlfGVufDB8fDB8fHww&w=1000&q=80" width="100%" height="100%"></img>
</div>
<div className="News-footer">
        <div className="news">
          <span><b>Books</b></span>
        </div>
        <div className="footer">
        <p className="N-text">
          <marquee direction="left">
            •  A book is a gift you can open again and again
            <span>•  Think before you speak. Read before you think. 
            </span>
            <span> •  Make it a rule never to give a child a book you would not read yourself.
            </span>
            <span> •  Books are mirrors: you only see in them what you already have inside you.
            </span>
          </marquee>
        </p>
      </div>
      </div>
      </div>
      </div>
  );
}
export default Home;