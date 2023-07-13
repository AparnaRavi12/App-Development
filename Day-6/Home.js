import React,{Component} from "react";
import './Home.css';
function Home(){
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
    return(
<div>
        <link href="https://fonts.googleapis.com/css?family=Raleway:400, 600" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="style.css" />
        <div className="header">  
          <a className="but">
     <button className="openbtn" onClick={openNav}>&#9776;</button>
     </a>
          <div className="container">
            <ul className="nav">
              <li>About</li>
              <li>Contact</li>
              <li>NookBooks</li>
              <li>Magazines</li>
              <li>Kids</li>
            </ul>
          </div>
          
        </div>
        <div className="jumbotron">
          <div className="container">  
            <div className="main">
              <h1>BOOKSTORE</h1>
              <a href="#" className="btn-main">Get Started</a>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <p>© Online Book Store</p>
          </div>
        </div>
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Horizontal Icon Bar</title>
        <div className="icon-bar">
          <a className="active" href="#"><i className="fa fa-home" /></a>
          <a href="#"><i className="fa fa-search" /></a>
          <a href="#"><i className="fa fa-envelope" /></a>
          <a href="#"><i className="fa fa-globe" /></a>
          <a href="#"><i className="fa fa-trash" /></a>
        </div>
      </div>
      <div id="mySidepanel" className="sidepanel">
<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
<a href="#">Home </a>
<a href="#">Cart </a>
<a href="#">Orders </a>
<a href="#">Profile </a>
<a href="#">Setting </a>
<a href="#">Logout</a>
</div>
      </div>
       );
      }
      export default Home;











      // https://codepen.io/Aparna-R-the-sans/pen/xxQpKGB
      //https://codepen.io/razrabotal/pen/zNWEaQ