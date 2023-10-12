import React from "react";
import "./footer.css";
import {FaSquareXTwitter, FaFacebookF, FaLinkedinIn, FaSquareInstagram} from "react-icons/fa6"


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section section_pad">
        <div className="footer-links">
          <div className="links-div">
            <h4> Book Orders</h4>
            <a href="/contact">
              <p>products</p>
            </a>
            <a href="/contact">
              <p>Sell your products</p>
            </a>
            <a href="/contact">
              <p>Buy in large quantities</p>
            </a>
          </div>

          <div className="links-div">
            <h4> resources </h4>
            <a href="/contact">
              <p>call as</p>
            </a>
            <a href="/contact">
              <p>locate us</p>
            </a>
            <a href="/contact">
              <p>support</p>
            </a>
          </div>
          <div className="links-div">
            <h4> join our social pages</h4>
            <div className="social">
              <p>
                <FaFacebookF/>
              </p>
              <p>
                <FaLinkedinIn/>
              </p>
              <p>
                <FaSquareXTwitter/>
              </p>
              <p>
                <FaSquareInstagram/>
              </p>

            </div>
          </div>
        </div>

        <br></br>

        <div className="footer-below">
          <div className="footer-copyright">
            <p>
              @{new Date().getFullYear()} justhasla. All rights reserved.
            </p>
          </div>
          <div className="footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Support</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Security</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
