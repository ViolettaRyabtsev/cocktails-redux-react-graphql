import "./top-header.scss";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export const NavLink = styled(Link)`
  padding: 5px 5px;
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

const TopHeader = () => {
  return (
    <>
      <div className="top-header-container">
        <div className="logo"> Find Your Perfect Recipe</div>
        <div className="navigation-container">
          <ul>
            <li>
              <NavLink to="/">Menu</NavLink>
            </li>
            <li>Contact</li>
            <li>
              {" "}
              <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default TopHeader;
