import { faCaretDown, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./TImelineNavbar.css";

const TimelineNavbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      style={{ paddingLeft: "0", paddingRight: "0" }}
      className="container d-flex justify-content-between timeline-nav"
    >
      <div className="d-flex gap-5">
        <a href="" className="active">
          All posts(32)
        </a>
        <a href="">Article</a>
        <a href="">Event</a>
        <a href="">Education</a>
        <a href="">Job</a>
      </div>
      <div className="my-auto d-flex gap-4">
        <div className="dropdown">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="rounded p-2 btn btn-light"
          >
            Write a post
            <FontAwesomeIcon className="px-2" icon={faCaretDown} />
          </button>
          <div
            className={`dropdown-menu ${dropdown ? "show" : ""}`}
            aria-labelledby="dropdownMenuButton"
          >
            <a className="dropdown-item" href="#">
              Post Now
            </a>
            <a className="dropdown-item" href="#">
              Post tommorow
            </a>
            <a className="dropdown-item" href="#">
              Post Never
            </a>
          </div>
        </div>
        <button className="rounded p-2 btn btn-primary">
          <FontAwesomeIcon icon={faUserPlus} /> Join Group
        </button>
      </div>
    </div>
  );
};

export default TimelineNavbar;
