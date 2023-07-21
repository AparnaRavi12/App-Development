import React from "react";
import { Link } from "react-router-dom";
import './Payment.css';
function Payment(){
  return(
  <div className="form">
    <form className="payment">
    <div className="panel panel-default credit-card-box">
      <div className="panel-heading display-table">
        <div className="row display-tr">
          <h3 className="panel-title display-td">Payment Details</h3>
        </div>
      </div>
    </div>
    <br />
    <label htmlFor="cardNumber">CARD NUMBER</label>
    <input type="text" size={10} className="form-control" name="cardNumber" placeholder="Valid Card Number" autoComplete="cc-number" required autofocus />
    <span className="input-group-addon"><i className="fa fa-credit-card" /></span>
    <label htmlFor="cardExpir">EXPIRATION DATE</label>
    <input type="text" size={5} className="form-control" name="cardExpiry" placeholder="MM / YY" autoComplete="cc-exp" required />
    <label htmlFor="cardCVC">CV CODE</label>
    <input type="text" size={3} className="form-control" name="cardCVC" placeholder="CVC" autoComplete="cc-csc" required />
    <label htmlFor="couponCode">DISCOUNT CODE</label>
    <input type="text" className="form-control" name="couponCode" />
    <br />
    <Link to="/success"><button className="blueButton" style={{float: 'right'}} type="submit">Confirm Payment</button></Link>
    <br /><br />
  </form>
  </div>
  );
}
export default Payment;