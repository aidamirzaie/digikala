import ProductCard from "../productcard/ProductCard";
import "./cardslider.css";
import mobileimg from "../../assets/mobile.webp";
import headimg from "../../assets/headset.webp";
function CardSlider() {
  return (
    <>
      <diV className="slider">
        <ProductCard
          title="phone"
          discount="4,000,000 Rial"
          discount_percentage="40%"
          price="8,000,000 Rial"
          img={mobileimg}
        />
        <ProductCard
          title="hedphone"
          discount="6,000,000 Rial"
          discount_percentage="30%"
          price="7,500,00 Rial"
          img={headimg}
        />
      </diV>
    </>
  );
}
export default CardSlider;
