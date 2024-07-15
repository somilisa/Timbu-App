const CartItem = (
  item,
  handleDecrement,
  handleIncrement,
  handleRemoveFromCart
) => {
  return (
    <div className="product" key={item.id}>
      <div className="product-image">
        <img
          src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
          alt=""
        />
      </div>
      <div className="product-description">
        <p>{item.name}</p>
        <p>XL</p>
        <p className="amount">&#8358; {item.current_price}</p>
        <div className="counter">
          <button onClick={() => handleDecrement(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleIncrement(item)}>+</button>
        </div>{" "}
        <button
          className="delete-btn"
          onClick={() => handleRemoveFromCart(item)}
        >
          Remove Product
        </button>
      </div>
    </div>
  );
};

export default CartItem;
