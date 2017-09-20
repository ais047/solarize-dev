import React, { Component } from 'react'

import { Link } from "react-router";

// Create the Main component
class AdminView extends Component {

  render() {

    return (
      <div class="columns">
      <aside class="column is-2 aside hero is-fullheight is-hidden-mobile">
        <div>
          <div class="main">
            <div class="title">Main</div>
            <a href="#" class="item active"><span class="icon"><i class="fa fa-home"></i></span><span class="name">Dashboard</span></a>
            <a href="#" class="item"><span class="icon"><i class="fa fa-map-marker"></i></span><span class="name">Activity</span></a>
            <a href="#" class="item"><span class="icon"><i class="fa fa-th-list"></i></span><span class="name">All Leads</span></a>
            <a href="#" class="item"><span class="icon"><i class="fa fa-folder-o"></i></span><span class="name">User Profiles</span></a>
          </div>
        </div>
      </aside>
      <div class="column is-10 admin-panel">
        <nav class="nav has-shadow" id="top">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item" href="../index.html">
                <img src="../images/Solarize.png" alt="Your Solar Sales Solution"></img>
              </a>
            </div>
            <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="nav-right nav-menu is-hidden-tablet">
              <a href="#" class="nav-item is-active">
                Dashboard
              </a>
              <a href="#" class="nav-item">
                Activity
              </a>
              <a href="#" class="nav-item">
                All Leads
              </a>
              <a href="#" class="nav-item">
                User Profiles
              </a>
            </div>
          </div>
        </nav>
        <section class="hero is-small">
          <!-- Hero content: will be in the middle -->
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Solarize Dashboard
              </h1>
              <h2 class="subtitle">
                Admin
              </h2>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="columns is-mobile is-multiline">
            <div class="column is-one-third-desktop is-full-mobile">
              <section class="panel">
                <p class="panel-heading">
                  All Leads
                </p>
                <p class="panel-tabs">
                  <a class="is-active" href="#">All Time</a>
                  <a href="#">Past week</a>
                  <a href="#">Past month</a>
                  <a href="#">Past quarter</a>
                  <a href="#">Past Year</a>
                </p>
                <div class="panel-block">
                  <div id="chart1" style="height: 250px;"></div>
                </div>
                <div class="panel-block">
                  <button class="button is-default is-outlined is-fullwidth">
                    View Data
                  </button>
                </div>
              </section>
            </div>
            <div class="column is-one-third-desktop is-full-mobile">
              <section class="panel">
                <p class="panel-heading">
                  Leads by User
                </p>
                <div class="panel-block">
                  <div id="chart2" style="height: 280px;"></div>
                </div>
                <div class="panel-block">
                  <button class="button is-default is-outlined is-fullwidth">
                    View Data
                  </button>
                </div>
              </section>
            </div>
            <div class="column is-one-third-desktop is-full-mobile">
              <section class="panel">
                <p class="panel-heading">
                  Leads by Region
                </p>
                <div class="panel-block">
                  <div id="chart3" style="height: 280px;"></div>
                </div>
                <div class="panel-block">
                  <button class="button is-default is-outlined is-fullwidth">
                    View Data
                  </button>
                </div>
              </section>
            </div>
            <div class="column is-half-desktop is-full-mobile">
              <section class="panel">
                <p class="panel-heading">
                 Notifications
               </p>
               <div class="panel-block">
                <div class="is-fluid notification is-warning">
                  <button class="delete" onclick="((this).parentNode.remove())"></button>
                  <strong>Solar Sell</strong><p> New Order</p><p>150 units</p>
                  <br>
                  <small>1h ago | via: system</small> 
                </div>
                <div class="is-fluid notification">
                  <button class="delete" onclick="((this).parentNode.remove())"></button>
                  <strong>Sky Power</strong><p> Conversion Quota Exceeded</p>
                  <br>
                  <small>2h ago | via: system</small> 
                </div>
                 <div class="is-fluid notification">
                  <button class="delete" onclick="((this).parentNode.remove())"></button>
                  <strong>Energize</strong><p> All Leads Delivered</p>
                  <br>
                  <small>1d ago | via: system</small> 
                </div>
              </div>
            </section>
          </div>
          <div class="column is-half-desktop is-full-mobile">
            <section class="panel">
              <p class="panel-heading">
                Conversions by User
              </p>
              <div class="panel-block">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Organization</th>
                      <th>Leads</th>
                      <th>Conversions</th>
                      <th>Coversion Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Solar Sells</td>
                      <td>5,250</td>
                      <td>525</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>Sky Power</td>
                      <td>3,000</td>
                      <td>600</td>
                      <td>20%</td>
                    </tr>
                    <tr>
                      <td>Energize</td>
                      <td>600</td>
                      <td>200</td>
                      <td>33%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
    );
  }
};

export default UserView;