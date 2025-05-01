import "./ProductCard.css";
import Button from "@mui/material/Button";
function ProductCard(props) {
  return (
    <>
      <div className="card">
        <img className="myimage" src={props.img} alt="this is amn image" />
        <h5 className="item title">{props.title}</h5>
        <p className="discount">{props.discount}</p>
        <p className="discount_percentage">{props.discount_percentage}</p>
        <p className="price">{props.price}</p>
        <Button variant="contained">افزودن به سبد خرید</Button>
      </div>
    </>
  );
}

export default ProductCard;
