import { useSelector } from "react-redux";
import "./checkout.scss";

const Checkout = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <main>
      <section className="checkout">
        <h3>CHECKOUT</h3>
        <div className="wrapper">
          <div className="left">
            <form action="post">
              <fieldset className="contact">
                <legend>CONTACT</legend>
                <input type="text" placeholder="Your Email Address" />
              </fieldset>
              <fieldset className="address">
                <legend>DELIVERY ADDRESS</legend>
                <div className=" full-name">
                  <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder="Your First Name" />
                  </div>
                  <div>
                    <label htmlFor="">Second Name</label>
                    <input type="text" placeholder="Your Second Name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="">State</label>
                  <div className="select">
                    <select name="state" id="state">
                      State
                      <option value="">State</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="">Address</label>
                  <div className="select">
                    <select name="address" id="address">
                      <option value="">Address</option>
                    </select>
                  </div>
                </div>{" "}
              </fieldset>
              <fieldset className="payment">
                <legend>PAYMENT METHOD</legend>
                <div className="method">
                  <div>
                    <input type="radio" name="" id="" />
                    <img src="./assets/mastercard_logo.svg" alt="" />
                  </div>
                  <div>
                    <input type="radio" name="" id="" />
                    <img src="./assets/paypal_logo.svg" alt="" />
                  </div>
                </div>
              </fieldset>
              <input type="submit" value="PROCEED TO CHECKOUT" />
            </form>
          </div>
          <div className="right">
            <h4>PRODUCT DETAILS</h4>
            {items.map((item) => (
              <div className="product-details" key={item.id}>
                <img
                  src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                  alt=""
                />
                <div>
                  <p>{item.categories[0]}</p>
                  <p>{item.name}</p>
                </div>
                <div>
                  <p>{item.quantity}</p>
                  <p>&#8358;{totalPrice}</p>
                </div>
              </div>
            ))}

            <hr />
            <p className="total">
              <span className="total">TOTAL </span>
              <span className="amount">&#8358; 40,000</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
