import "./Navbar.scss";
import { Auth, Cart, Hamburger } from "./Icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <Link to="/" className="brand">
          <span>SPORT</span> ESSENTIALS
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="links">
          <Link to="/cart">
            <Cart />
          </Link>
          <a href="#">
            <Auth />
          </a>
        </div>
      </div>
      <button className="mobile-only" href="">
        <Hamburger />
      </button>
    </div>
  );
};

export default Navbar;
