import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Categories from "../components/Categories.jsx";
// import Products from "../components/Products";
// import Testimonial from "../src/components/Testimonial";
// import CTA from "../src/components/CTA";

const Home = () => {
  return (
    <main className="home-container">
      <Hero />
      <Featured title={"Featured"} />
      <Categories />
      <Featured title={"Bestseller"} />
      {/* <Products />
      <Testimonial />
      <CTA /> */}
    </main>
  );
};

export default Home;
