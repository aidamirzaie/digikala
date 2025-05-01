import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardSlider from "./components/cardslider/CardSlider";
import ProductCard from "./components/productcard/ProductCard";
import mobileimg from "./assets/mobile.webp";
import headimg from './assets/headset.webp'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>digikala</h1>
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
