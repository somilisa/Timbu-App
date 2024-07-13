import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../slices/cartSlice";
import CartItem from "../components/CartItem";
import "./Cart.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity({ id: item.id }));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity({ id: item.id }));
  };
  console.log(totalPrice);
  return (
    <main>
      <section className="cart">
        <h3>CART</h3>
        <div className="wrapper">
          {items.length < 1 ? (
            <div className="empty-cart">
              <p>No Item in Cart</p>
            </div>
          ) : (
            <div className="cart-items">
              {items.map((item) =>
                CartItem(
                  item,
                  handleDecrement,
                  handleIncrement,
                  handleRemoveFromCart
                )
              )}
            </div>
          )}
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="content">
              <p>
                <span className="total">Total: </span>
                <span className="amount">&#8358;{totalPrice}</span>
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
