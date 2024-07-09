import "./Featured.scss";
import ProductsList from "./ProductsList";
import PropTypes from "prop-types";
const Featured = ({ title }) => {
  return (
    <section className="featured">
      <div className="wrapper">
        <h3>{title}</h3>
        <ProductsList />
      </div>
    </section>
  );
};

export default Featured;
Featured.propTypes = {
  title: PropTypes.string,
};
