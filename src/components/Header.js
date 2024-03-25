import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("Header Rendered");

  //if no dependency array =====> useEffect is called on every Render
  //if dependency array is empty  = [] => use effect is called on initial render(just once)
  //if dependecny array is  [btnNameReact]= use effect is called on every udpate of the btnNameReact
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="header">
      <div className="logo-Container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/1191192/screenshots/4250680/foodie_faster.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="/about">About us</a> */}
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
