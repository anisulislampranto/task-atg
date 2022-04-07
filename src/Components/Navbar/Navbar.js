import React from "react";
import "./Navabr.css";
import logo from "../../Assests/Screenshot_2022-04-07_at_12.08.46_PM-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div style={{ height: "72px" }} className="">
      <div className=" d-flex space-evenly justify-content-evenly">
        <img width={"200px"} src={logo} alt="" className="my-auto" />
        <div style={{ width: "350px" }} class="form-group has-search my-auto">
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

        <p className="my-auto">
          Create Account. <span className="text-primary">It's Free! </span>
          <FontAwesomeIcon icon={faCaretDown} />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
