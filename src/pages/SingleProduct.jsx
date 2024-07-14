import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { useGetProductByIdQuery } from "../services/api";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Cart,
  ChevronLeft,
  ChevronRight,
  Eye,
  Love,
  Star,
} from "../components/Icons";
// import { images } from "../constants";
// import ProductsList from "../components/ProductsList";
import { range } from "../utils";
import Button from "../components/Button";
import IconButton from "../components/IconButton";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: product } = useGetProductByIdQuery(id);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <main>
      <section className="product-hero">
        <header>
          <p>
            <span className="home">Home</span> &gt; Shop
          </p>
        </header>
        {product ? (
          <>
            <div className="wrapper">
              <div className="left">
                <Carousel
                  showIndicators={false}
                  showStatus={false}
                  showArrows={true}
                  renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        className="arrow-styles prev"
                      >
                        <ChevronLeft />
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        className="arrow-styles next"
                      >
                        <ChevronRight />
                      </button>
                    )
                  }
                >
                  <img src={product.images[0]} alt={product.title} />
                  <img src={product.thumbnail} alt={product.title} />
                </Carousel>
              </div>
              <div className="right">
                <h4>{product.title}</h4>
                <div className="productReview">
                  <div>
                    {range(5).map((num) => {
                      return (
                        <Star
                          className={`${product.rating > num ? "filled" : ""}`}
                          key={num}
                        />
                      );
                    })}
                  </div>
                  ({product.reviews.length}) Reviews
                </div>
                <p className="productPrice">${product.price}</p>
                <p className="availability">
                  Availability: <span>{product.availabilityStatus}</span>
                </p>
                <p className="description">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <hr />
                <div className="colors">
                  <button></button>
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
                <div className="call-to-action">
                  <Button
                    color={"#fff"}
                    backgroundColor={"var(--primary-color)"}
                  >
                    Select Options
                  </Button>
                  <IconButton>
                    <Love />
                  </IconButton>
                  <IconButton onClick={() => handleAddToCart(product)}>
                    <Cart />
                  </IconButton>
                  <IconButton>
                    <Eye />
                  </IconButton>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Product not found</p>
        )}
      </section>
      <section className="product-info">
        <div className="wrapper">
          <nav>
            <button>Description</button>
            <button>Additional</button>
            <button>Review</button>
          </nav>
          <hr />
          <div className="info-wrapper">
            <div className="info">
              <h3>the quick brown fox jumps</h3>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="image">
              {/* <img src={images?.unsplash1} alt="" /> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;
