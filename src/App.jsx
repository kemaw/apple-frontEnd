// import { useState } from 'react'
// import "./css/styles.css";
// import "./css/bootstrap.css";
// import "./App.css"
import Header from "./components/Header/Header";
import Alerts from "./components/Alerts/Alerts";
// import SectionOne from "./components/SectionOne/SectionOne";
// import SectionTwo from "./components/SectionTwo/SectionTwo";
// import SectionThree from "./components/SectionThree/SectionThree";
// import SectionFour from "./components/SectionFour/SectionFour";
// import SectionFive from "./components/SectionFive/SectionFive";
// import SectionSix from "./components/SectionSix/SectionSix";
import Footer from "./components/Footer/Footer";
// import YouTube from "./components/YouTube/YouTube";
import { Route, Routes } from "react-router-dom";
import Mac from "./components/Mac/Mac";
import Iphone from "./components/Iphone/Iphone";
import Ipad from "./components/Ipad/ipad";
import Watch from "./components/Watch/Watch";
import Tv from "./components/TV/Tv";
import Music from "./components/Music/Music";
import Support from "./components/Support/Support";
import Cart from "./components/Cart/Cart";
import Main from "./components/Main/Main";
import Four04 from "./components/Page/Four04";
import SharedLayout from "./components/Page/SharedLayout";
import SharedVideo from "./components/Page/SharedVideo";
import ProductPage from "./components/ProductPage/ProductPage";
function App() {
  return (
    <>
      // <Alerts />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="iphone/:productID" element={<ProductPage />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/" component={<SharedVideo />}>
            <Route path="/Tv" element={<Tv />} />
            <Route path="/music" element={<Music />} />
          </Route>
          <Route path="/support" element={<Support />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
