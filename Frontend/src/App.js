import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import {Routes,Route, BrowserRouter}from 'react-router-dom';
import Payment from './Payment';
import Books from './Books';
import Success from './Success';
import Setting from './Setting';
import Feedback from './Feedback';
import Signup from './Signup';
import Searchbar from './Searchbar';

/*function App() {
  return (
    <div className="App">
      <Searchbar/>
    </div>*/
    const App = () => {
      return (
        <div className="app">
          <BrowserRouter>
          {<Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/books" element={<Books/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/success" element={<Success/>}/>
            <Route path="/setting" element={<Setting/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/search" element={<Searchbar/>}/>
      </Routes> }
      </BrowserRouter>
        </div>
      );
    }
export default App;



















/*function App() {
  return (
    <div className="App">
      <Orders/>
    </div>*/