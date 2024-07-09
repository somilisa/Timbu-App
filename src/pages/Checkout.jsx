import "./checkout.scss";
const Checkout = () => {
  return (
    <main>
      <section className="checkout">
        <h3>CHECKOUT</h3>
        <div className="wrapper">
          <div>
            <form action="post">
              <p>CONTACT</p>
              <input type="text" placeholder="Your Email Address" />
              <p>DELIVERY ADDRESS</p>
              <label htmlFor="">First Name</label>
              <input type="text" placeholder="Your First Name" />
              <label htmlFor="">Second Name</label>
              <input type="text" placeholder="Your Second Name" />
              <label htmlFor=""></label>
              <select />
              <label htmlFor=""></label>
              <input type="text" />
              <p>PAYMENT METHOD</p>
              <input type="radio" name="" id="" />
              <input type="radio" name="" id="" />
              <input type="submit"></input>
            </form>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
