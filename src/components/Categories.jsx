import { products } from "../data";
import "./Categories.scss";
import CategoryCard from "./CategoryCard.jsx";
const Categories = () => {
  return (
    <section className="categories">
      <div className="wrapper">
        <h3>Categories</h3>
        <div className="products">
          {products.map((product) => (
            <CategoryCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
