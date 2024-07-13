import "./Navbar.scss";
import { Auth, Cart, Hamburger } from "./Icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
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
            <span>{itemCount}</span>
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
