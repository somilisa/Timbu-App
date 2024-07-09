import "./Featured.scss";
import PropTypes from "prop-types";

const CategoryCard = ({ product }) => {
  return (
    <div className="product-card">
      <a className="product" href="#">
        <div className="product-image">
          <img src={product.src} alt="" />
        </div>
        <p className="title">{product.title}</p>
      </a>
    </div>
  );
};

export default CategoryCard;
CategoryCard.propTypes = {
  product: PropTypes.object,
};
