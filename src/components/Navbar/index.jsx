/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
    // handleSearch();
  }, []);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img
                  ref={lr}
                  src={`${appData.darkLogo}`}
                  alt="logo"
                  style={{ height: 20, width: 290 }}
                />
              ) : (
                <img
                  ref={lr}
                  src={`${appData.lightLogo}`}
                  alt="logo"
                  style={{ height: 20, width: 290 }}
                />
              )
            ) : (
              <img
                ref={lr}
                src={`${appData.lightLogo}`}
                alt="logo"
                style={{ height: 80, width: 290 }}
              />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">HOME</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">ABOUT</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">CONTACT</a>
              </Link>
            </li>

            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SERVICES
              </span>
              <div className="dropdown-menu">
                <Link href="/banking">
                  <a className="dropdown-item">Banking</a>
                </Link>
                <Link href="/insurance">
                  <a className="dropdown-item">Insurance</a>
                </Link>
              </div>
                         
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PRODUCTS
              </span>
              <div className="dropdown-menu">
                <Link href="/rize">
                  <a className="dropdown-item">Rize</a>
                </Link>
                <Link href="/welab">
                  <a className="dropdown-item">Welab</a>
                </Link>
                <Link href="/switch">
                  <a className="dropdown-item">Switch</a>
                </Link>
                <Link href="/pms">
                  <a className="dropdown-item">Parking Management System</a>
                </Link>
                <Link href="/rms">
                  <a className="dropdown-item">Restaurant Management System</a>
                </Link>
                <Link href="/cms">
                  <a className="dropdown-item">Campaign Management System</a>
                </Link>
                <Link href="/digitalwallet">
                  <a className="dropdown-item">Digital Wallet</a>
                </Link>
                <Link
                      href="/whatsapp-chatbot-solution"
                      // className={styles.ol}
                    >
                         <a className="dropdown-item">

                      WhatsApp Chatbot Solution
                         </a>
                    </Link>
                    <Link
                      href="/whatsapp-message-broadcast-solution"
                      // className={styles.ol}
                    >
                      <a className="dropdown-item">
                      WhatsApp Message Broadcast Solution
                      </a>
                    </Link>
                    <Link
                       href="/bank-to-bank-remittance-service"
                      // className={styles.ol}
                    >
                         <a className="dropdown-item">

                      Bank to Bank Remittance Service
                         </a>
                    </Link>
                    <Link
                       href="/cross-border-utility-bill-payment-solution"
                      // className={styles.ol}
                    >
                         <a className="dropdown-item">

                      Cross-Border Utility Bill Payment Solution
                         </a>
                    </Link>
              </div>
            
            </li>
            {/*  <li className="nav-item">
            <Link href="/works2/works2-dark">
              <a className="nav-link">Portfolio</a>
            </Link>
            </li>*/}
          </ul>
          <div className="search">
            <span>
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (+92) 335 0028601{" "}
             <br />
           
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
