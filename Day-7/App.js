import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import {Routes,Route}from 'react-router-dom';
import Payment from './Payment';
import Books from './Books';
import Success from './Success';
import Setting from './Setting';


/*function App() {
  return (
    <div className="App">
      <Profile/>
    </div>*/
    const App = () => {
      return (
        <div className="app">
          {<Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/books" element={<Books/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/success" element={<Success/>}/>
            <Route path="/setting" element={<Setting/>}/>
      </Routes> }
        </div>
      );
    }
export default App;





/*function App() {
  return (
    <div className="App">
      <Orders/>
    </div>*/