
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./css/landing.css"
import "./css/bulma.css"
import "jquery"
import helpers from "./js/helper.js"

className Landing extends Component {
  render() {
    return (
      <div>
       <section className="hero is-primary is-large header-image">
        <div className="hero-head">
          <header className="nav">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item" href="/..landing.html">
                 <img src="/favicon.png" alt="Solarize logo"/>
                </a>
              </div>
              <span className="nav-toggle">
                <span></span>
                <span></span>
              </span>
              <div className="nav-right nav-menu">
                <span className="dropdown is-active">
                  <div className="dropdown-trigger">
                    <a className="button is-info is-outlined is-inverted" href="/signup">
                      <span className="icon">
                        <i className="fa fa-github"></i>
                      </span>
                      <span>Become an Affiliate</span>
                    </a>
                  </div>
                </span>
                <span className="dropdown is-active">
                  <div className="dropdown-trigger">
                    <a className="button is-info is-outlined is-inverted" href="/login">
                      <span className="icon">
                        <i className="fa fa-github"></i>
                      </span>
                      <span>User Login</span>
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </header>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2" id="main-title">Solarize</h1>
            <h2 className="subtitle is-5" id="sub-title">A solar lead management system</h2>
            <br></br>
            <br></br>
            <div>
                  <div className="modal" id=modal1>
                        <div className="modal-background"></div>
                        <div className="modal-card">
                            <header className="modal-card-head">
                                <p className="modal-card-title">Request Free Quote</p>
                                <button className="delete" aria-label="close"></button>
                            </header>
                            <section className="modal-card-body">
                                <fieldset>
                                    <p>FIND OUT HOW MUCH YOU CAN SAVE</p>
                                    <input type="hidden" name="oid" value="00D80000000dNiA">
                                    <input type="hidden" name="retURL" value="#">
                                    <!--ADJUST TO THE THANK YOU PAGE YOU WANT-->
                                    <div>
                                        <input id="first_name" maxlength="40" name="first_name" size="20" type="text" placeholder="First Name" required="">
                                    </div>
                                    <div>
                                        <input id="last_name" maxlength="80" name="last_name" size="20" type="text" placeholder="Last Name" required="">
                                    </div>
                                    <div>
                                        <input id="email" maxlength="80" name="email" size="20" type="email" placeholder="Email Address" required="">
                                    </div>
                                    <div>
                                        <input id="phone" maxlength="15" name="phone" size="20" type="tel" placeholder="Phone" required="">
                                    </div>
                                    <div>
                                        <input id = "streetAddress" name="street" size="20" placeholder="Street Address">
                                    </div>
                                    <div>
                                        <div className="tier">
                                            <input id="city" maxlength="40" name="city" size="20" type="text" placeholder="City">
                                        </div>
                                        <div>
                                            <div className="tier">
<!--                                                 <input id="state" maxlength="2" name="city" size="20" type="text" placeholder="State"> -->
                                                                                <select id="statelist" name="state_full_name">
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                            </div>
                                        </div>
                                        <div className="tier">
                                            <input id="zip" maxlength="5" name="zip" size="20" type="text" placeholder="Zip">
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" id="sentmail_submit" name="sentmail[submit]">Submit Info&gt;&gt;</button>
                                    </div>
                            </section>
                            <footer className="modal-card-foot">
                                <button className="button is-success" id="butSubmit">Submit</button>
                                <button className="button is-danger" id="cancel">Cancel</button>
                            </footer>
                        </div>
                    </div>
                        <div className="modal" id= modal2>
                        <div className="modal-background"></div>
                        <div className="modal-card">
                            <header className="modal-card-head">
                                <p className="modal-card-title">Thank You For Submitting!</p>
                                <button className="delete" aria-label="close"></button>
                            </header>
                            <section className="modal-card-body">
                                <fieldset>
                                    <input type="hidden" name="oid" value="00D80000000dNiA">
                                    <input type="hidden" name="retURL" value="#">
                                    <!--ADJUST TO THE THANK YOU PAGE YOU WANT-->

                                    <div>

                                        <div id=fieldinfo>
                                        </div>

                                    </div>

                            </section>
                            <footer className="modal-card-foot">
                                <button className="button is-danger" id="close">Close</button>
                            </footer>
                        </div>
                    </div>
                <a className="button is-outlined" id="showModal" onClick={helpers.openModal}>
                  <span className="icon">
                    <i className="fa fa-download"></i> 
                  </span>
                  <span>Request Info</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="hero-cta">
          <nav className="level">
            <div className="level-item has-text-centered">
              <p className="title">Click to get Started <a className="button is-primary"><span className="icon"><i className="fa fa-download"></i></span><span>Intent</span></a></p>
            </div>
          </nav>
        </div>
        <div className="section main">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <div className="panel">
                  <div className="panel-block section">
                    <p className="has-text-centered"><i className="fa fa-camera-retro icon-block"></i></p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                    <br></br>
                    <p className="has-text-centered"><a className="button is-dark">More Info</a></p>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="panel">
                  <div className="panel-block section">
                    <p className="has-text-centered"><i className="fa fa-bar-chart icon-block"></i></p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                    <br></br>
                    <p className="has-text-centered"><a className="button is-dark">More Info</a></p>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="panel">
                  <div className="panel-block section">
                    <p className="has-text-centered"><i className="fa fa-cloud icon-block"></i></p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                    <br></br>
                    <p className="has-text-centered"><a className="button is-dark">More Info</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p><strong>Solarize &copy 2017</strong></p>
              <p><a className="icon" href=""><i className="fa fa-github"></i></a></p>
            </div>
          </div>
        </footer>
      </div>      
      )
    }
  }
export default Landing;