import ProductCard from "../productcard/ProductCard";
import "./cardslider.css";

function CardSlider(props) {
  return (
    <>
      <diV className="slider">
        {props.children}

      </diV>
    </>
  );
}
export default CardSlider;
