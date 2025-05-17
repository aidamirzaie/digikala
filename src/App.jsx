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
import handsimg from './assets/hands.webp';
import hiscaimg from'./assets/hisca.webp';
import laptapimg from'./assets/laptap.webp';
import lapimg from './assets/lap.webp';

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
          price="5,970,000تومان"
          img={handsimg}
        />
        <ProductCard
          title="هندرفری ایکس او"
          discount="144,000 تومان"
          discount_percentage="43%"
          price="253,000 تومان"
          img={watchimg}
        />
        <ProductCard
          title="هندرفری بلوتوثی هیسکا مدل"
          discount="1,790,000 تومان"
          discount_percentage="30%"
          price="2,550,000 تومان"
          img={hiscaimg}
        />
        <ProductCard
          title="لپ تاپ 15.6 اینچی ایسوس"
          discount="75,999,000 تومان"
          discount_percentage="8%"
          price="82,800,000 تومان"
          img={laptapimg}
        />
        <ProductCard
          title='لپ تاپ 14.1 اینجی اپل مدل'
          discount="124,499,000 تومان"
          discount_percentage="5%"
          price="131,499,000 تومان"
          img={lapimg}
        />
      </CardSlider>
      <div>
        <p></p>
      </div>
    </>
  );
}

export default App;
