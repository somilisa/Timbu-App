// import { useSelector, useDispatch } from "react-redux";
// import { useGetProductsQuery } from "../services/api";
// import { incrementPage } from "../slices/productSlice";
// import styles from "./Products.module.css";
// import ProductsList from "./ProductsList.jsx";

// const Products = () => {
//   const dispatch = useDispatch();
//   const { limit, hasMore } = useSelector((state) => state.product);
//   const { isLoading, error } = useGetProductsQuery({ limit });

//   const handleLoadMore = () => {
//     dispatch(incrementPage());
//   };

//   return (
//     <section className={styles.productsContainer}>
//       <div className={styles.productsWrapper}>
//         <div className={styles.productsHeader}>
//           <h2>Featured Products</h2>
//           <h3>BESTSELLER PRODUCTS</h3>
//           <p>Problems trying to resolve the conflict between </p>
//         </div>
//         <ProductsList limit={limit} />
//         {isLoading && <p className={styles.loadingText}>Loading...</p>}
//         {error && <p className={styles.errorText}>Error loading products</p>}
//         {hasMore && !isLoading && (
//           <button className={styles.loadMoreButton} onClick={handleLoadMore}>
//             Load More Products
//           </button>
//         )}{" "}
//       </div>
//     </section>
//   );
// };

// export default Products;

// export const Header = () => {
//   <div className={styles.productsHeader}>
//     <h2>Featured Products</h2>
//     <h3>BESTSELLER PRODUCTS</h3>
//     <p>Problems trying to resolve the conflict between </p>
//   </div>;
// };
