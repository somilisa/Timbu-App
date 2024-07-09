import { Link } from "react-router-dom";
import "./Cart.scss";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import ProductsList from "../src/components/ProductsList.jsx";
// import { ShoppingCart } from "../src/components/ShoppingCart.js";

const Cart = () => {
  return (
    <main>
      <section className="cart">
        <h3>CART</h3>
        <div className="wrapper">
          <div className="product">
            <div className="product-image">
              <img src="../../src/assets/jersey-01.png" alt="" />
            </div>
            <div className="product-description">
              <p>AC Milan Jersey</p>
              <p>XL</p>
              <p className="amount">&#8358; 40,000</p>
              <div></div>
              <button className="delete-btn">Remove Product</button>
            </div>
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="content">
              <p>
                <span className="total">Total: </span>
                <span className="amount">&#8358; 40,000</span>
              </p>
              <Link to="/checkout" className="checkout-btn">
                Checkout
              </Link>
            </div>
          </div>{" "}
        </div>
      </section>
    </main>
  );
};

export default Cart;
