import "./Featured.scss";
import PropTypes from "prop-types";
import { Star } from "./Icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { range } from "../utils";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="product-card">
      <a className="product" href="#">
        <div className="product-image">
          <img
            src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
            alt=""
          />
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
        <div className="product-description">
          <div></div>
          <p>{product.name}</p>
          <div className="product-rating">
            {range(5).map((num) => {
              return (
                <Star
                  className={`${product.rating > num ? "filled" : ""}`}
                  key={num}
                />
              );
            })}
          </div>
          <p>&#8358; {product.current_price[0].NGN}</p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.object,
};
