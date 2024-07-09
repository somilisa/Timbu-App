import ProductCard from "./ProductCard";
import { products } from "../data";
import PropTypes from "prop-types";

function ProductsList() {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductsList;
ProductsList.propTypes = {
  limit: PropTypes.any,
};
