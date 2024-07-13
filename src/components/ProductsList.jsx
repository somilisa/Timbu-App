import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetProductsQuery } from "../services/api";
import { setProducts } from "../slices/productSlice";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

function ProductsList({ page = 1, size = 50 }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { data } = useGetProductsQuery({ page, size });

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

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
  page: PropTypes.number,
  size: PropTypes.number,
};
