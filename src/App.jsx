import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardSlider from "./components/cardslider/CardSlider";
import ProductCard from "./components/productcard/ProductCard";
import mobileimg from "./assets/mobile.webp";
import headimg from './assets/headset.webp'
import Avatar from "./components/avatar/Avatar";

function App() {
  const [count, setCount] = useState(0);
  const Mystyle={
    width:'70px',
    height:'70px',
    borderRadius: '100%',
    backgroundColor:'red'

    }
    const styles={
      width:'80px',
    height:'80px',
    borderRadius: '90%',
    backgroundColor:'blue'

    }

  return (
    <>
      <h1>digikala</h1>
      <Avatar style={Mystyle}></Avatar>
      <Avatar style={styles}></Avatar>
      <CardSlider>
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
      </CardSlider>
      <div>
        <p></p>
      </div>
    </>
  );
}

export default App;
