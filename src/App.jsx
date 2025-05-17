import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardSlider from "./components/cardslider/CardSlider";
import ProductCard from "./components/productcard/ProductCard";
import mobileimg from "./assets/mobile.webp";
import headimg from "./assets/headset.webp";
import Avatar from "./components/atom/avatar/Avatar";
import CarRental from "@mui/icons-material/CarRental";
import AcUnitTwoTone from "@mui/icons-material/AcUnitTwoTone";
import Label from "./components/atom/label/Label";
import Highlight from "./components/molecule/highlights/Highlight";
import watchimg from './assets/watch.webp';
function App() {
  return (
    <>
      <h1>digikala</h1>
      <div class='highlights'>
        <Highlight text="uxg"></Highlight>
        <Highlight text="hh"></Highlight>
      </div>

      <CardSlider>
        <ProductCard
          title="موبایل مدل"
          discount="3,999,000 تومان"
          discount_percentage="33%"
          price="5,970,000 تومان"
          img={mobileimg}
        />
        <ProductCard
          title="هدفون بلوتوثی مدل"
          discount="499,000 تومان"
          discount_percentage="44%"
          price="899,000 تومان"
          img={headimg}
        />
        <ProductCard
          title="ساعت هوشمند"
          discount="3,990,000 تومان"
          discount_percentage="33%"
          price="5,970,00 تومان"
          img={watchimg}
        />
      </CardSlider>
      <div>
        <p></p>
      </div>
    </>
  );
}

export default App;
