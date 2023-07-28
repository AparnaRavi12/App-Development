import React from "react";
import { Link } from "react-router-dom";
import './Setting.css';
function Setting(){
    return(
        <div className="setting">
          <Link to="/home">HOME</Link>
      <div className="table">
        <div className="row">
          <div className="cell"><i className="fa fa-tachometer" aria-hidden="true" />Notification</div>
          <div className="cell">
            <fieldset>
              <input type="checkbox" id="Notification" name="Notification" defaultValue={1} />
              <label htmlFor="Notification" />
            </fieldset>
          </div>
        </div>
      </div>
      <div className="table">
        <div className="row">
          <div className="cell"><i className="fa fa-tachometer" aria-hidden="true" />Auto Subscribe</div>
          <div className="cell">
            <fieldset>
              <input type="checkbox" id="Auto Subscribe" name="Auto Subscribe" defaultValue={2} />
              <label htmlFor="Auto Subscribe" />
            </fieldset>
          </div>
        </div>
      </div>
      <div className="table">
        <div className="row">
          <div className="cell"><i className="fa fa-tachometer" aria-hidden="true" />Security</div>
          <div className="cell">
            <fieldset>
              <input type="checkbox" id="Security" name="Security" defaultValue={4} />
              <label htmlFor="Security" />
            </fieldset>
          </div>
        </div>
      </div>
      <div className="table">
        <div className="row">
          <div className="cell"><i className="fa fa-tachometer" aria-hidden="true" />Connect to facebook</div>
          <div className="cell">
            <fieldset>
              <input type="checkbox" id="Connect to facebook" name="Connect to facebook" defaultValue={5} />
              <label htmlFor="Connect to facebook" />
            </fieldset>
          </div>
        </div>
        </div>
      </div> 
    );
}
export default Setting;