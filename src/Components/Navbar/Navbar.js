import React, { useState } from "react";
import "./Navabr.css";
import logo from "../../Assests/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-3">
      <div className=" d-flex space-evenly justify-content-evenly navigation-bar my-auto">
        <div className="d-flex space-evenly justify-content-evenly">
          <img width={"200px"} src={logo} alt="" className="my-auto" />
          <span onClick={() => setToggle(!toggle)} className="menu-icon">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
        <>
          <div
            style={{ width: "350px" }}
            class="form-group has-search my-auto searchBar-big-screen"
          >
            <span class="fa fa-search form-control-feedback">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input
              style={{ borderRadius: "20px", background: "#F2F2F2" }}
              type="text"
              class="form-control"
              placeholder="Search For Your Favorite groups in ATG"
            />
          </div>
          <p className="my-auto login-big-screen">
            Create Account. <span className="text-primary">It's Free! </span>
            <FontAwesomeIcon icon={faCaretDown} />
          </p>
        </>

        {toggle ? (
          <>
            <div
              style={{ width: "350px" }}
              class="form-group has-search my-auto searchBar-small-screen"
            >
              <span class="fa fa-search form-control-feedback">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              <input
                style={{ borderRadius: "20px", background: "#F2F2F2" }}
                type="text"
                class="form-control"
                placeholder="Search For Your Favorite groups in ATG"
              />
            </div>
            <p className="my-auto login-small-screen">
              Create Account. <span className="text-primary">It's Free! </span>
              <FontAwesomeIcon icon={faCaretDown} />
            </p>
          </>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
