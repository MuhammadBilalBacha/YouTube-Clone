import React, { Fragment, useState } from "react";
import "./Header.css";
import logo from "../../Assets/logoblack.png";
import { FaSearch } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    Navigate(`/search/${search}`);
    // setSearch("");
  };
  return (
    <Fragment>
      <nav className="nav fixed-top">
        <div className="container-fluid top-flex">
          <div className="logo">
            <div className={props.menuclasses} onClick={props.menuClick}>
              {props.icons}
            </div>
            <img src={logo} alt="" onClick={() => Navigate("/")} />
          </div>
          <div className="form">
            <form className="myform" onSubmit={submitHandler}>
              <input
                type="text"
                className="input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search here"
              />

              <FaSearch className="myicon" onClick={submitHandler} />
            </form>
          </div>
          <div className="user-icon">
            <div className="icon-flex">
              <div className="user">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
