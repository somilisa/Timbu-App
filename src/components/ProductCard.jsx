import "./Featured.scss";
import PropTypes from "prop-types";
import { Star } from "./Icons";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <a className="product" href="#">
        <div className="product-image">
          <img src={product.src} alt="" />
          <button>Add to cart</button>
        </div>
        <div className="product-description">
          <div></div>
          <p>{product.title}</p>
          {/* <div className="product-rating">
            {range(5).map((num) => {
              return (
                <Star
                  className={`${product.rating > num ? styles.filled : ""}`}
                  key={num}
                />
              );
            })}
          </div> */}
          <p>&#8358; 4000</p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.object,
};
