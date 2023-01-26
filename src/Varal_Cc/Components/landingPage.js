import React from "react";
import './styles.css'
import {flm} from '../Assets/ILLUSTRATION.png'
import { ChildCp } from "./childpage";
export function LandingPage(props) {
  function callBackFun(e){
    console.log(e);
  }
  return (
    <div className="">
      <nav class="navbar">
        <div class="logo">ViralUae</div>

        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />

          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>

          <div class="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li class="services">
              <a href="/">Services</a> 
            </li>

            <li>
              <a href="/">Pricing</a>
            </li>

            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <button className="btn btn-primary">Start a Company</button>
            </li>
          </div>
        </ul>
      </nav>
      
      <div>
        <input  type="text" placeholder="Search a term | topic"></input>
      </div>
      <div>
        <div>
            <p>Claim a Free Quote</p>
            <h3>Get started on fulfilling your Dubai or UAE dream.</h3>
            <p>UAE & Offshore Company</p>
            <p>We provide you with information about UAE or Offshore Company Registration & help you setup your company with a bank account and visas.</p>
            <button className="btn btn-primary">Start a Company</button>
            <button className="btn btn-primary">Renew a Company</button>
        </div>
      </div>
      <div>
        {/* <image src={{flm}}></image> */}
      </div>
     
    </div>
  );
}
