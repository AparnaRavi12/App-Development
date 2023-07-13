import React,{Component} from "react";
function Home(){
    return(
<div>
        <link href="https://fonts.googleapis.com/css?family=Raleway:400, 600" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="style.css" />
        <div className="header">
          <div className="container">
            <ul className="nav">
              <li>Home</li>
              <li>About</li>
              <li>Proflie</li>
              <li>Setting</li>
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
      </div>
       );
      }
      export default Home;











      // https://codepen.io/Aparna-R-the-sans/pen/xxQpKGB